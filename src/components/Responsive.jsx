import React from 'react'

export function Responsive(){
    return(
        <section id="action" className="responsive">
            <div className="vertical-center">
                <div className="container">
                    <div className="row">
                        <div className="action take-tour">
                            <div className="col-sm-7 wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                                <h1 className="title">Triangle Corporate Template</h1>
                                <p>A responsive, retina-ready &amp; wide multipurpose template.</p>
                            </div>
                            <div className="col-sm-5 text-center wow fadeInRight" data-wow-duration="500ms"
                                 data-wow-delay="300ms">
                                <div className="tour-button">
                                    <a href="#" className="btn btn-common">TAKE THE TOUR</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
