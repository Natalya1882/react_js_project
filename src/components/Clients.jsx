import React from 'react'

export function Clients(){
    return(
        <section id="clients">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="clients text-center wow fadeInUp" data-wow-duration="500ms"
                             data-wow-delay="300ms">
                            <a href="#"><img src="images/home/clients.png" className="img-responsive" alt=""/></a>
                            <h1 className="title">Happy Clients</h1>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                            <p>Ut enim ad minim veniam, quis nostrud </p>
                        </div>
                        <div className="clients-logo wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client1.png" className="img-responsive" alt=""/></a>
                            </div>
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client2.png" className="img-responsive" alt=""/></a>
                            </div>
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client3.png" className="img-responsive" alt=""/></a>
                            </div>
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client4.png" className="img-responsive" alt=""/></a>
                            </div>
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client5.png" className="img-responsive" alt=""/></a>
                            </div>
                            <div className="col-xs-3 col-sm-2">
                                <a href="#"><img src="images/home/client6.png" className="img-responsive" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}