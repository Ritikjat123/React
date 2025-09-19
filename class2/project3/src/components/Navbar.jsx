import logo from "../assets/logo.svg"
import "./Navbar.css";
function Navbar() {
    return (
        <div className="navbar">
            {/* Left part */}
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="logo" />
                <a href="/">Home</a>
                <a href="/">Courses</a>
                <a href="/">Register for Free</a>
            </div>

            {/* Right part */}
            <div className="navbar-right">
                <p>Login</p>
                <p>Signup</p>
            </div>
        </div>

    )
}

export default Navbar
