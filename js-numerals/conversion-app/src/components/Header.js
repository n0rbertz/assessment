
const Header = ({title}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
        </header>
    )

    
}

Header.defaultProps = {
    title : "Conversion tool"
}

export default Header;