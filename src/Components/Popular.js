import React from 'react'
import pop from "../assets/images/popular-01.jpg"
import clip1 from "../assets/images/clip-01.jpg"
import clip2 from "../assets/images/clip-02.jpg"
import clip3 from "../assets/images/clip-03.jpg"
import clip4 from "../assets/images/clip-04.jpg"



const Popular = () => {
    return (
        <>
            <div className="most-popular">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="heading-section">
                            <h4><em>Most Popular</em> Right Now</h4>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={pop} alt=""  />
                                    <h4>Fortnite<br /><span>Sandbox</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={clip1} alt="" />
                                    <h4>PubG<br /><span>Battle S</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={clip2} alt="" />
                                    <h4>Dota2<br /><span>Steam-X</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={clip3}alt="" />
                                    <h4>CS-GO<br /><span>Legendary</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={clip4} alt="" />
                                    <h4>Warface<br /><span>Max 3D</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={pop}   alt="" />
                                    <h4>Warcraft<br /><span>Legend</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="main-button">
                                    <a href="browse.html">Discover Popular</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popular