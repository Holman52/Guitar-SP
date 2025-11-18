import CardPublic from "./common/CardPublic.jsx";

const GuitarService = () => {
    const data = [
        {
            header: "Бесплатная пожизненная настройка каждой купленной гитары",
            title: "ваше идеальное звучание начинается здесь и сейчас",
            display: '',
            count: 01
        },
        {
            header: "Экспертная консультация от музыкантов",
            title: "помогут подобрать инструмент менно под ваш стиль и уровень",
            display: '',
            count: 02
        },
        {
            header: "Гарантия лучшей цены",
            title: "возможность торговли-in вашего старого инструмента",
            display: '',
            count: 03
        },
        {
            header: "Профессиональный подбор и setup гитары под вас",
            title: "",
            display: 'none',
            count: <img alt='dddadsads' src='/public/guitar-service.png' />
        },
        {
            header: "Выгодные цены и бонусы для постоянных клиентов",
            title: "",
            display: 'none',
            count:  <img alt='dddadsads' src='/public/Coins.png' />
        },
        {
            header: "Быстрая доставка по всей стране и удобный возврат",
            title: "",
            display: 'none',
            count:  <img alt='dddadsads' src='/public/Delivery.png' />
        },
        {
            header: "Только проверенные бренды и отборные экземпляры",
            title: "мы сами тестируем каждую гитару перед продажей",
            display: '',
            count: 04
        },
        {
            header: "Расширенная гарантия 3 года",
            title: "сервисное обслуживание в подарок к любой покупке",
            display: '',
            count: 05
        },
        {
            header: "Гибкие варианты рассрочки",
            title: "без переплат, чтобы музыка была доступна каждому",
            display: '',
            count: 06
        },
    ];
    return (
        <CardPublic></CardPublic>
    )
}
export default GuitarService;