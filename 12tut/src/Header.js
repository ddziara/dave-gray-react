const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {                      // this is something new, "defaultProps" on the function itself to pass default property values
    title: "Default Title"
}

export default Header;