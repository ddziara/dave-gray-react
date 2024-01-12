const Button = ({ buttonText, reqType, setRegType }) => {
    return (
        <button
            className={buttonText === reqType ? "selected" : null}
            type="button"
            onClick={() => setRegType(buttonText)}
        >
            {buttonText}
        </button>
    )
}

export default Button