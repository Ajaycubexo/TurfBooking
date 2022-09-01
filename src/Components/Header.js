import React from 'react'

const Header = () => {
    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">

                                <a href="index.html" className="logo">
                                    <img src="assets/images/logo.png" alt="" />
                                </a>

                                <div className="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                                        <i className="fa fa-search"></i>
                                    </form>
                                </div>

                                <ul className="nav">
                                    <li><a href="index.html" className="active">Home</a></li>
                                    <li><a href="browse.html">About Us</a></li>
                                    <li><a href="details.html">Book Now</a></li>
                                    <li><a href="streams.html">Blog</a></li>
                                    <li><a href="profile.html">Contact <img src="assets/images/profile-header.jpg" alt="" /></a></li>
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