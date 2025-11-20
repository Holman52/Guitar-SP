
import '../../styles/base/common/ImgScroll.scss'
const ImgScroll = (props) => {
    return (
        <div className='popular-brends__block'>
                <img
                    src={`${props.path}.webp`}
                    alt="Адаптивное изображение"
                    className="popular-brends__img"
                    loading="lazy"
                />
        </div>
    )
}
export default ImgScroll