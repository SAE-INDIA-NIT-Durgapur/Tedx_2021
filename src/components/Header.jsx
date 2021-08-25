import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand text-danger" href="#">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav m-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active pr-3">
                            <NavLink to="/" className="nav-link text-danger">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item pr-3">
                            <NavLink to="/about" className="nav-link text-danger" >About</NavLink>
                        </li>
                        <li className="nav-item pr-3">
                            <NavLink to="/speakers" className="nav-link text-danger" >Speakers</NavLink>
                        </li>
                        <li className="nav-item pr-3">
                            <NavLink to="/sponsors" className="nav-link text-danger" >Sponsors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" className="btn bg-light text-danger">Register</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Header
