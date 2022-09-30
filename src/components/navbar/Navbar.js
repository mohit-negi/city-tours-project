import React from "react"
import logo from "../../KTW_tours.png"
import "./Navbar.scss"
function Navbar(){
    return (
        <nav className="navbar">
            <div>
                <img className="navbar-logo" src={logo} alt="citytours logo"/>
            </div>
                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">About</a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">Tours</a>
                    </li>
                </ul>
        </nav>
    )
}
export default Navbar;