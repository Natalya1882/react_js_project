import React from 'react'

export function Slider(){
    return (
        <section id="home-slider">
            <div className="container">
                <div className="row">
                    <div className="main-slider">
                        <div className="slide-text">
                            <h1>We Are Creative Nerds</h1>
                            <p>Boudin doner frankfurter pig. Cow shank bresaola pork loin tri-tip tongue venison pork
                                belly meatloaf short loin landjaeger biltong beef ribs shankle chicken andouille.</p>
                            <a href="#" className="btn btn-common">SIGN UP</a>
                        </div>
                        <img src="images/home/slider/hill.png" className="slider-hill" alt="slider image"/>
                            <img src="images/home/slider/house.png" className="slider-house" alt="slider image"/>
                                <img src="images/home/slider/sun.png" className="slider-sun" alt="slider image"/>
                                    <img src="images/home/slider/birds1.png" className="slider-birds1"
                                         alt="slider image"/>
                                        <img src="images/home/slider/birds2.png" className="slider-birds2"
                                             alt="slider image"/>
                    </div>
                </div>
            </div>
            <div className="preloader"><i className="fa fa-sun-o fa-spin"></i></div>
        </section>
    )
}