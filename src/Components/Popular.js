import React from 'react'
import tennis from "../assets/images/tennis.jpg"
import stock from "../assets/images/stock.jpg"
import baskat from "../assets/images/baskat.jpg"
import Badminton from "../assets/images/Badminton.jpg"
import ball from "../assets/images/ball.jpg"
import racket from "../assets/images/racket.jpg"


const Popular = () => {
    return (
        <>
            <div className="most-popular">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section">
                            <h4><em>Most Popular</em> Right Now</h4>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={tennis} alt="" />
                                    <h4>Fortnite<br /><span>Sandbox</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={stock} alt="" />
                                    <h4>PubG<br /><span>Battle S</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="item">
                                    <img src={baskat} alt="" />
                                    <h4>Dota2<br /><span>Steam-X</span></h4>
                                    <ul>
                                        <li><i className="fa fa-star"></i> 4.8</li>
                                        <li><i className="fa fa-download"></i> 2.3M</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                        <img src={Badminton} alt="" />
                                        <h4>CS-GO<br /><span>Legendary</span></h4>
                                        <ul>
                                            <li><i className="fa fa-star"></i> 4.8</li>
                                            <li><i className="fa fa-download"></i> 2.3M</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                        <img src={ball} alt="" />
                                        <h4>Warface<br /><span>Max 3D</span></h4>
                                        <ul>
                                            <li><i className="fa fa-star"></i> 4.8</li>
                                            <li><i className="fa fa-download"></i> 2.3M</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="item">
                                        <img src={racket} alt="" />
                                        <h4>Warcraft<br /><span>Legend</span></h4>
                                        <ul>
                                            <li><i className="fa fa-star"></i> 4.8</li>
                                            <li><i className="fa fa-download"></i> 2.3M</li>
                                        </ul>
                                    </div>
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