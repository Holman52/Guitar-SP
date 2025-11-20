import {useState} from "react";
const Selection = () => {
    const [selectedValue, setSelectedValue] = useState('guitars');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);

    };

    return (
        <div className="custom-select">
            <select
                value={selectedValue}
                onChange={handleChange}
                className="select-element"
                defaultValue={'guitars'}
            >

                <option value="all">Все товары</option>
                <option value="guitars">Гитары</option>
                <option value="drums">Барабаны</option>
                <option value="violins">Скрипки</option>
                <option value="accessories">Аксессуары</option>
            </select>
            <div className="select-arrow">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    );
}
export default Selection