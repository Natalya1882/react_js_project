import React from 'react'

export function Services(){
    return(
        <section id="services">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms"
                         data-wow-delay="300ms">
                        <div className="single-service">
                            <div className="wow scaleIn" data-wow-duration="500ms" data-wow-delay="300ms">
                                <img src="images/home/icon1.png" alt=""/>
                            </div>
                            <h2>Incredibly Responsive</h2>
                            <p>Ground round tenderloin flank shank ribeye. Hamkevin meatball swine. Cow shankle beef
                                sirloin chicken ground round.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms"
                         data-wow-delay="600ms">
                        <div className="single-service">
                            <div className="wow scaleIn" data-wow-duration="500ms" data-wow-delay="600ms">
                                <img src="images/home/icon2.png" alt=""/>
                            </div>
                            <h2>Superior Typography</h2>
                            <p>Hamburger ribeye drumstick turkey, strip steak sausage ground round shank pastrami beef
                                brisket pancetta venison.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms"
                         data-wow-delay="900ms">
                        <div className="single-service">
                            <div className="wow scaleIn" data-wow-duration="500ms" data-wow-delay="900ms">
                                <img src="images/home/icon3.png" alt=""/>
                            </div>
                            <h2>Swift Page Builder</h2>
                            <p>Venison tongue, salami corned beef ball tip meatloaf bacon. Fatback pork belly bresaola
                                tenderloin bone pork kevin shankle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}