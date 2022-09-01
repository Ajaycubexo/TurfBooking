import React from 'react'
import Ground from "../assets/images/ground.jpg"
const Banner = () => {
    return (
        <>
            <div className="main-banner">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="header-text">
                            <h6>Welcome To Turf</h6>
                            <h4><em>Browse</em> Our Popular Games Here</h4>
                            <div className="main-button">
                                <div>
                                <img src={Ground} alt="" height="300px" width="300px" />
                                </div>
                                <a href="browse.html">Browse Now </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;