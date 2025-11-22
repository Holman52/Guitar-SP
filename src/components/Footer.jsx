 import '../styles/components/Footer.scss'
 import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer">
                <div className="footer-content">
                    <p className='footer-header'>О нас</p>
                    <address className='footer-text'>
                        <p className='footer-text__desc'><a href="tel:+70000000000">+7 (000) 000-00-00</a></p>
                        <p className='footer-text__desc'><a href="mailto:info@example.com">vinokurov@gmail.com</a></p>
                        <p className='footer-text__desc address'>Г. Нижний Новгород, Московское шоссе 1</p>
                    </address>
                </div>
                <nav className="footer-content">
                    <p className='footer-header'>Навигация</p>
                    <ul className='footer-text'>
                        <li className='footer-text__desc'><Link to="/catalog">Каталог</Link></li>
                        <li className='footer-text__desc'><Link to="/about">О нас</Link></li>
                        <li className='footer-text__desc'><Link to="/contact">Контакты</Link></li>
                    </ul>
                </nav>
                <div className="footer-content">
                    <p className='footer-header'>Дополнительные услуги</p>
                    <div className='footer-flex'>
                        <div className='footer-text'>
                            <p className='footer-text__desc'><a href="#">Ремонт оборудования</a></p>
                            <p className='footer-text__desc'><a href="#">Настрйка гитар</a></p>
                            <p className='footer-text__desc address' ><a href="#">Кастомизация и модификация</a></p>
                        </div>
                        <div className='footer-text'>
                            <p className='footer-text__desc'><a href="#">Диагностика и консультации</a></p>
                            <p className='footer-text__desc'><a href="#">Аренда</a></p>
                            <p className='footer-text__desc'><a href="#">Чистка и уход</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer