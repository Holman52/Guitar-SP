import Button from "./Button.jsx";
import '../../styles/base/common/CardProduct.scss'
const CardProduct = (props) => {
    const handleClickButton = (e) =>{
        e.preventDefault();

    }

    return (
        <div className="card" key={props.key}>
            <div className="card-img">
            <picture>
                <source
                    media="(max-width: 768px)"
                    srcSet={`${props.path}-sm.webp`}
                    type="image/webp"
                />
                <img
                    src={`${props.path}.webp`}
                    alt="Адаптивное изображение"
                    loading="lazy"
                />
             </picture>
            </div>
            <div className="card-text">
                <p className='card-text__header'>{props.price}</p>
                <p className='card-text__title'>{props.name}</p>
            </div>
            <div className="card-btn">
                <Button className="card-btn__product" onClick={handleClickButton}>Подробнее</Button>
                <Button className="card-btn__buy" onClick={handleClickButton}>В корзину</Button>
            </div>
        </div>
    );
}

export default CardProduct