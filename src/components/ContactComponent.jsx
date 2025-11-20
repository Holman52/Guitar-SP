import React from 'react';
import '../styles/components/Contact.scss'
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
                <div id='map'></div>
            </div>
        </div>
    );
}

export default ContactComponent;