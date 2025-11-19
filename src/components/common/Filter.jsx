// FilterComponent.jsx
import React, { useState } from 'react';
// import './Filter.css';
// import './HorizontalFilter.css';
// import './CheckboxFilter.css';
// import './ResponsiveFilter.css';

const Filter= ({ onFilter }) => {
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        status: '',
        priceRange: ''
    });

    const categories = ['Электроника', 'Одежда', 'Книги', 'Дом'];
    const statuses = ['В наличии', 'Нет в наличии', 'Под заказ'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(filters);
    };

    const handleReset = () => {
        setFilters({
            search: '',
            category: '',
            status: '',
            priceRange: ''
        });
        onFilter({});
    };

    return (
        <div className="filter-container horizontal-filter">
            <div className="filter-group">
                <label className="filter-label">Поиск</label>
                <input
                    type="text"
                    name="search"
                    value={filters.search}
                    onChange={handleInputChange}
                    className="filter-input"
                    placeholder="Введите запрос..."
                />
            </div>

            <div className="filter-group">
                <label className="filter-label">Категория</label>
                <select
                    name="category"
                    value={filters.category}
                    onChange={handleInputChange}
                    className="filter-select"
                >
                    <option value="">Все категории</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label className="filter-label">Статус</label>
                <select
                    name="status"
                    value={filters.status}
                    onChange={handleInputChange}
                    className="filter-select"
                >
                    <option value="">Все статусы</option>
                    {statuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>
            </div>

            <div className="filter-buttons">
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="filter-button"
                >
                    Применить
                </button>
                <button
                    type="button"
                    onClick={handleReset}
                    className="filter-button filter-button-reset"
                >
                    Сбросить
                </button>
            </div>
        </div>
    );
};

export default Filter;