import CardPublic from "./common/CardPublic.jsx";
import '../styles/components/GuitarService.scss'
const GuitarService = () => {
    const data = [
        {
            header: "Бесплатная пожизненная настройка гитары",
            title: "ваше идеальное звучание начинается здесь и сейчас",
            display: '',
            service: '',
            class:'div1',
            count: "6"
        },
        {
            header: "Экспертная консультация",
            title: "Проконсультируем перед покупкой",
            display: '',
            service: '',
            class:'div2',
            count: "2"
        },
        {
            header: "Гарантия лучшей цены",
            title: "возможность обмена в trade-in",
            display: '',
            service: '',
            class:'div3',
            count: "1"
        },
        {
            header: "Подберём идеальную гитару именно для вас",
            title: "",
            display: 'none',
            service: 'main-service',
            class:'div4',
            count: <img alt='dddadsads' src='/public/guitar-service.png' />
        },
        {
            header: "Выгодные цены и бонусы для постоянных клиентов",
            title: "",
            display: 'none',
            class:'div5',
            service: 'main-service',
            count:  <img alt='dddadsads' src='/public/Coins.png' />
        },
        {
            header: "Быстрая доставка по всей стране и удобный возврат",
            title: "",
            display: 'none',
            class:'div6',
            service: 'main-service',
            count:  <img alt='dddadsads' src='/public/Delivery.png' />
        },
        {
            header: "Только проверенные бренды",
            title: "мы сами тестируем каждую гитару перед продажей",
            display: '',
            service: '',
            class:'div7',
            count: "4"
        },
        {
            header: "Расширенная гарантия 3 года",
            title: "сервисное обслуживание в подарок к любой покупке",
            display: '',
            class:'div8',
            service: '',
            count: "5"
        },
        {
            header: "Гибкие варианты рассрочки",
            title: "без переплат, чтобы музыка была доступна каждому",
            display: '',
            class:'div9',
            service: '',
            count: '3'
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
                    service={item.service}
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