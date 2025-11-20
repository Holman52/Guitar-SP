import '/src/styles/components/Navigation.scss'
import {useEffect, useState} from "react";
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Проверка размера экрана
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleMenu = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
        }
    };

    // Закрываем меню при изменении размера экрана на desktop
    useEffect(() => {
        if (!isMobile) {
            setIsOpen(false);
        }
    }, [isMobile]);

    const menuItems = [
        { label: 'Каталог', href: '/catalog', id: 1 },
        { label: 'Хит продаж', href: '/', id: 2 },
        { label: 'О нас', href: '/services', id: 3 },
        { label: 'Контакты', href: '/contact', id: 4 },
        { label: 'Избранное', href: '/home', id: 5 },
        { label: 'Корзина', href: '/about', id: 6 },
        { label: 'Профиль', href: '/services',id: 7 },

    ];

    return (
        <header className="nav">
            <nav className="nav__navigation">
                <img src="#" alt="logo" className="nav__navigation-logo" />
                <div className="nav__navigation-links">
                    <a href="/catalog" className='link-router'>Каталог</a>
                    <a href="/" className='link-router'>Хит продаж</a>
                    <a href="" className='link-router'>О нас</a>
                    <a href="/contact" className='link-router'>Контакты</a>
                </div>
                <div className="nav__navigation-users">
                    <a href="" className='nav__navigation-users-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 48 48">
                            <title>heart-like</title>
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="invisible_box" data-name="invisible box">
                                    <rect width="48" height="48" fill="none"/>
                                </g>
                                <g id="icons_Q2" data-name="icons Q2">
                                    <path d="M34,8.1a7.6,7.6,0,0,1,5.6,2.4A7.7,7.7,0,0,1,42,16.1c0,2.1-1.3,4.5-3.9,7.4L24,38.5,9.9,23.5C7.3,20.6,6,18.2,6,16.1a7.7,7.7,0,0,1,2.4-5.6A7.6,7.6,0,0,1,14,8.1c2.2,0,5.1,2,6.5,4.5L23.1,17a1.1,1.1,0,0,0,1.8,0l2.6-4.4c1.4-2.5,4.3-4.5,6.5-4.5M34,4c-3.9,0-8,3.1-10,6.5C22,7.1,17.9,4,14,4A12,12,0,0,0,5.5,7.6,11.9,11.9,0,0,0,2,16.1c0,4.1,2.7,7.6,5,10.2L23.3,43.7a1,1,0,0,0,1.4,0L41,26.3c2.3-2.6,5-6.1,5-10.2A12.1,12.1,0,0,0,34,4Z"/>
                                </g>
                            </g>
                        </svg>


                        <p className='nav__navigation-users-link__text'>Избранное</p>
                    </a>
                    <a href="" className='nav__navigation-users-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="28px" height="28px" viewBox="0 0 1024 1024">
                            <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"/>
                        </svg>
                        <p className='nav__navigation-users-link__text'>Корзина</p>
                    </a>
                    <a href="" className='nav__navigation-users-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24"><circle fill="none" cx="12" cy="7" r="3"/><path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm9 11v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1h2z"/></svg>
                        <p className='nav__navigation-users-link__text'>Профиль</p>
                    </a>
                </div>
                {isMobile && (
                    <>
                        <button
                            className={`burger-btn ${isOpen ? 'open' : ''}`}
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                            <nav>
                                <ul>
                                    {menuItems.map((item, index) => (
                                        <li key={item.id}>
                                            <a
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div
                            className={`overlay ${isOpen ? 'visible' : ''}`}
                            onClick={toggleMenu}
                        ></div>
                    </>
                )}
            </nav>


        </header>

    )
}
export default Navigation
