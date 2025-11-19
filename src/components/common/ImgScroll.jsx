 const ImgScroll = (props) => {
    return (
        <div>
                <img
                    src={`${props.path}.webp`}
                    alt="Адаптивное изображение"
                    loading="lazy"
                />
        </div>
    )
}
export default ImgScroll