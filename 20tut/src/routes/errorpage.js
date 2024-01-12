import { useRouteError, Link } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error);

    return (
        <main className="ErrorPage">
            <h2>Problem occured</h2>
            <p>Sorry, an unexpected error has occured</p>
            <p><i style={{color:"red"}}>{error.statusText || error.message}</i></p>
            <p>
                <Link to="/">Visit Our Home Page</Link>
            </p>
        </main>
    )
}

export default ErrorPage