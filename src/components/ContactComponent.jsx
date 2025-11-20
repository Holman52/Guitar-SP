import React, {useEffect, useState} from 'react';
import '../styles/components/Contact.scss';
function ContactComponent() {
    // const [mapLoaded, setMapLoaded] = useState(false);
    //
    //     useEffect(() => {
    //
    //
    //         const init = () => {
    //             if (window.ymaps && window.ymaps.Map) {
    //                 try {
    //                     let map = new window.ymaps.Map('map', {
    //                         center: [56.656302, 44.350966],
    //                         zoom: 16
    //                     });
    //
    //                     let placemark = new window.ymaps.Placemark([56.656302, 44.350966], {
    //                         balloonContent: 'Г. Нижний Новгород, Московское шоссе 1'
    //                     }, {
    //                         preset: 'islands#icon',
    //                         iconColor: '#0095b6'
    //                     });
    //
    //                     map.controls.remove('geolocationControl');
    //                     map.controls.remove('searchControl');
    //                     map.controls.remove('trafficControl');
    //                     map.controls.remove('typeSelector');
    //                     map.controls.remove('fullscreenControl');
    //                     map.controls.remove('zoomControl');
    //                     map.controls.remove('rulerControl');
    //
    //                     map.geoObjects.add(placemark);
    //                     setMapLoaded(true);
    //                 } catch (error) {
    //                     console.error('Error initializing map:', error);
    //                 }
    //             }
    //         };
    //
    //         // Проверяем, загружены ли уже Яндекс Карты
    //         if (window.ymaps) {
    //             init();
    //         } else {
    //             // Если нет, загружаем API
    //             loadYandexMaps();
    //         }
    //
    //         function loadYandexMaps() {
    //             // Проверяем, не загружен ли уже скрипт
    //             if (document.querySelector('#yandex-maps-api')) {
    //                 return;
    //             }
    //
    //             const script = document.createElement('script');
    //             script.id = 'yandex-maps-api';
    //             script.src = 'https://api-maps.yandex.ru/v3/?apikey=4c721025-467a-43c8-b569-336676e1da62=ru_RU API-ключ&lang=ru_RU';
    //             script.onload = () => {
    //                 window.ymaps.ready(init);
    //             };
    //             script.onerror = () => {
    //                 console.error('Failed to load Yandex Maps API');
    //             };
    //             document.head.appendChild(script);
    //         }
    //
    //         return () => {
    //             const mapElement = document.getElementById('map');
    //             if (mapElement) {
    //                 mapElement.innerHTML = '';
    //             }
    //         };
    //     }, [])

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