const Button = ({title, color, onClick}) => {
    return (
        <button style={{backgroundColor: color}} onClick={onClick}>{title}</button>
    )
}

export default Button;