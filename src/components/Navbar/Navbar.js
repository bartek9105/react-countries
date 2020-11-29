import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <section className="navbar-container">
                <h1 className="navbar__title">Where in the world?</h1>
                <div className="navbar__darkmode">
                    <i className="navbar__icon far fa-moon"></i>
                    <span className="navbar__text">Dark Mode</span>
                </div>
            </section>
        </nav>
    )
}

export default Navbar