import React from 'react';
import { NavLink } from 'react-router-dom';


import "../styles/Navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top mt-2 mb-3">
            <div className="container-fluid">
                <a className="navbar-brand me-auto" href="#">
                    <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3.svg" alt="" />
                </a>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Car Rental</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-5">
                            <li className="nav-item fw-medium fs-5">
                                <NavLink className="nav-link active mx-lg-2" aria-current="page" to="/" style={{color:'#3DEAC2'}}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-lg-2 fw-medium fs-5" to="/Details">Details</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-lg-2 fw-medium fs-5"  to="/aboutus">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-lg-2 fw-medium fs-5" to="/faq">FAQ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-lg-2 fw-medium fs-5" to="/contact">Contact</NavLink>
                            </li>
                                <button className='login-button'>Call Us</button>
                        </ul>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className='ms-3'>
                    <button>Call Us</button>
                </div>
            </div>
        </nav>
    );
}
