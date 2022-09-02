import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="" className="logo">
                                    <img src="assets/images/logo.png" alt="" />
                                </a>

                                <div className="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                                        <i className="fa fa-search"></i>
                                    </form>
                                </div>

                                <ul className="nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/bookNow">Book Now</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact <img src="assets/images/profile-header.jpg" alt="" /></Link></li>
                                    <li><Link to="/loginsignup">Loginsignup</Link></li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;