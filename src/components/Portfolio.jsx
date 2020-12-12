import React from 'react'

export function Portfolio(){
    return(
        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <ul className="portfolio-filter text-center">
                        <li><a className="btn btn-default active" href="#" data-filter="*">All</a></li>
                        <li><a className="btn btn-default" href="#" data-filter=".branded">Branded</a></li>
                        <li><a className="btn btn-default" href="#" data-filter=".design">Design</a></li>
                        <li><a className="btn btn-default" href="#" data-filter=".folio">Folio</a></li>
                        <li><a className="btn btn-default" href="#" data-filter=".logos">Logos</a></li>
                        <li><a className="btn btn-default" href="#" data-filter=".mobile">Mobile</a></li>
                        <li><a className="btn btn-default" href="#" data-filter=".mockup">Mockup</a></li>
                    </ul>


                    <div className="portfolio-items">
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item branded logos">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/1.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/1.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item branded folio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/2.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/2.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item design logos">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/3.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/3.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item design logos">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/4.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/4.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item branded mobile">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/5.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/5.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item branded mockup">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/6.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/6.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item branded folio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/7.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/7.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item design logos">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/8.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/8.jpg#" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item branded logos">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/9.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/9.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item branded mockup">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/10.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/10.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item design folio">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/11.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/11.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item branded mockup">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/12.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/12.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item design mobile">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/13.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/13.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item design logos">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/14.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/14.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item branded logos">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/15.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/15.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-3 portfolio-item branded logos">
                            <div className="portfolio-wrapper">
                                <div className="portfolio-single">
                                    <div className="portfolio-thumb">
                                        <img src="images/portfolio/16.jpg" className="img-responsive" alt=""/>
                                    </div>
                                    <div className="portfolio-view">
                                        <ul className="nav nav-pills">
                                            <li><a href="portfolio-details.html"><i className="fa fa-link"></i></a></li>
                                            <li><a href="images/portfolio/16.jpg" data-lightbox="example-set"><i
                                                className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-info ">
                                    <h2>Sailing Vivamus</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-pagination">
                        <ul className="pagination">
                            <li><a href="#">left</a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li className="active"><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li><a href="#">7</a></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#">9</a></li>
                            <li><a href="#">right</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}