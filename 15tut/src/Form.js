import Button from "./Button";

const Form = ({ reqType, setRegType }) => {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <Button
                buttonText="users"
                reqType={reqType}
                setRegType={setRegType}
            />
            <Button
                buttonText="posts"
                reqType={reqType}
                setRegType={setRegType}
            />
            <Button
                buttonText="comments"
                reqType={reqType}
                setRegType={setRegType}
            />
        </form>
    )
}

export default Form