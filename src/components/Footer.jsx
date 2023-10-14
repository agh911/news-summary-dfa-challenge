import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-body-tertiary py-5">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-5 me-5 mb-3">
                        <h1>News Spotlight</h1>
                        <form className="mt-4">
                            <p className="mb-2">Subscribe to our newsletter for the latest updates.</p>
                            <div className="d-flex">
                                <input className="form-control me-2" type="email" placeholder="Enter your email" />
                                <button className="btn btn-dark">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-6 col-md-2 mb-2">
                        <h5 className="mb-3">Sections</h5>
                        <p>World News</p>
                        <p>Australia News</p>
                        <p>Technology</p>
                        <p>Business</p>
                        <p>Politics</p>
                        <p>Sport</p>
                    </div>
                    <div className="col-6 col-md-2 mb-2">
                        <h5 className="mb-3">About</h5>
                        <p>Contact Us</p>
                        <p>Feedback</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>FAQs</p>
                    </div>
                    <div className="col-6 col-md-2 mb-2">
                        <h5 className="mb-3">Follow us</h5>
                        <div className="d-flex mb-3">
                            <i className="fa-brands fa-linkedin fa-lg me-2"></i>
                            <i className="fa-brands fa-square-facebook fa-lg me-2"></i>
                            <i className="fa-brands fa-square-instagram fa-lg"></i>
                        </div>
                        <div className="d-flex mt-4">
                            <i className="fa-brands fa-square-twitter fa-lg me-2"></i>
                            <i className="fa-brands fa-square-youtube fa-lg me-2"></i>
                            <i className="fa-brands fa-square-pinterest fa-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            <p className="container mt-5">Copyright &copy; News Spotlight 2023 - All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;