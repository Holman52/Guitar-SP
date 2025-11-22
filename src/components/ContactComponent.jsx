
import '../styles/components/Contact.scss';
function ContactComponent() {


return (
        <div className="contact">
            <h1 className='contact-header'>Контакты</h1>
            <div className="contact-flex">
                <div className="contact-text">
                    <p className="contact-text__desc">+7 (000) 000-00-00</p>
                    <p className="contact-text__desc">vinokurov@gmail.com</p>
                    <p className="contact-text__desc">Г. Нижний Новгород, Московское шоссе 1</p>
                </div>
                <div id='map'>   <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=43.946814%2C56.324038&z=16.4&pt=43.948008%2C56.325660,pm2blm"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Карта расположения"
                /></div>
            </div>
        </div>
    );
};

export default ContactComponent;