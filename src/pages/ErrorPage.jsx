import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div id='error-page' className="container d-flex flex-column align-items-center my-5">
            <h3>Oops! A Mischievous Dog Chewed Up This Page</h3>
            <p className="error-message my-2">We're sorry for the "ruff" experience. A playful pup turned this page into a chew toy, causing an error. Don't worry; we're on it to fix this as swiftly as paw-ssible.</p>
            <img className="error-image px-5" src="https://i.imgur.com/lKJiT77.png" alt="Cheerful dog, chewing a paper page" />
        </div>
    )
}

export default ErrorPage;