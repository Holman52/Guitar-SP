import CardPublic from "./common/CardPublic.jsx";
import '../styles/components/GuitarService.scss'
const GuitarService = () => {
    const data = [
        {
            header: "Бесплатная пожизненная настройка гитары",
            title: "ваше идеальное звучание начинается здесь и сейчас",
            display: '',
            class:'div1',
            count: "01"
        },
        {
            header: "Экспертная консультация от музыкантов",
            title: "помогут подобрать инструмент менно под ваш стиль и уровень",
            display: '',
            class:'div2',
            count: "02"
        },
        {
            header: "Гарантия лучшей цены",
            title: "возможность торговли-in вашего старого инструмента",
            display: '',
            class:'div3',
            count: "03"
        },
        {
            header: "Профессиональный подбор и setup гитары под вас",
            title: "",
            display: 'none',
            class:'div4',
            count: <img alt='dddadsads' src='/public/guitar-service.png' />
        },
        {
            header: "Выгодные цены и бонусы для постоянных клиентов",
            title: "",
            display: 'none',
            class:'div5',
            count:  <img alt='dddadsads' src='/public/Coins.png' />
        },
        {
            header: "Быстрая доставка по всей стране и удобный возврат",
            title: "",
            display: 'none',
            class:'div6',
            count:  <img alt='dddadsads' src='/public/Delivery.png' />
        },
        {
            header: "Только проверенные бренды и отборные экземпляры",
            title: "мы сами тестируем каждую гитару перед продажей",
            display: '',
            class:'div7',
            count: "04"
        },
        {
            header: "Расширенная гарантия 3 года",
            title: "сервисное обслуживание в подарок к любой покупке",
            display: '',
            class:'div8',
            count: "05"
        },
        {
            header: "Гибкие варианты рассрочки",
            title: "без переплат, чтобы музыка была доступна каждому",
            display: '',
            class:'div9',
            count: '06'
        },
    ];
    return (
        <div className="service-container">
            <div className="service-container__flex">
                <h1 className="service-container__header">Почему именно мы ?</h1>
            <div className="service">
                {data.map((item) => (
                    <div className={`service-item ${item.class}`}>
                <CardPublic
                    class={item.class}
                    header={item.header}
                    title={item.title}
                    display={item.display}
                    count={item.count}
                />
                    </div>
                ))}
            </div>
            </div>
        </div>

    )
}
export default GuitarService;