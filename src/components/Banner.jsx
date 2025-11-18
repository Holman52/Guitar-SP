import React from 'react';
import '../styles/components/Banner.scss'
import Button from "./common/Button.jsx";
import InputSearch from './common/inputSearch.jsx';
import navigation from "./Navigation.jsx";
const Banner = () => {
    const handleClickButton = (e) => {
        navigation.navigate('klkk');
        e.preventDefault();

    }
    return (
        <div className="Banner">
            <div className="Banner__img-ukulele"></div>
            <div className="Banner__img-guitar"></div>

        <div className="shop-container">
            <div className="shop-container__text"><section className="shop-assortment">
            <header className="shop-header">
                <h3 className="shop-header__title">МАГАЗИН-МАСТЕРСКАЯ</h3>
                <h1 className="shop-header__subtitle">ВСЕ ВИДЫ ИНСТРУМЕНТОВ В НИЖНЕМ НОВГОРОДЕ</h1>
                <h2 className="assortment-title">ОГРОМНЫЙ АССОРТИМЕНТ</h2>
            </header>
                <Button className="catalog-btn" onClick={handleClickButton}>Каталог</Button>
                <div className="search-container">
                    <InputSearch
                        // onSearch={handleSearch}
                        placeholder="Поиск гитар, усилителей..."
                    />
                </div>
            </section>
            </div>
        </div>
        </div>
    );
};

export default Banner;