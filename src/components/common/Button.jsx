import '../../styles/base/common/Button.scss'
const Button = (props) => {
    return (
        <button type="submit" onClick={props.onClick} className={`btn ${props.className}`}>{props.children}</button>
    )
}
export default Button;