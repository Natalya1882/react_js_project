export function Footer(){
    return(
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center bottom-separator">
                        <img src="images/home/under.png" className="img-responsive inline" alt=""/>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="testimonial bottom">
                            <h2>Testimonial</h2>
                            <div className="media">
                                <div className="pull-left">
                                    <a href="#"><img src="images/home/profile1.png" alt=""/></a>
                                </div>
                                <div className="media-body">
                                    <blockquote>Nisi commodo bresaola, leberkas venison eiusmod bacon occaecat labore
                                        tail.
                                    </blockquote>
                                    <h3><a href="#">- Jhon Kalis</a></h3>
                                </div>
                            </div>
                            <div className="media">
                                <div className="pull-left">
                                    <a href="#"><img src="images/home/profile2.png" alt=""/></a>
                                </div>
                                <div className="media-body">
                                    <blockquote>Capicola nisi flank sed minim sunt aliqua rump pancetta leberkas venison
                                        eiusmod.
                                    </blockquote>
                                    <h3><a href="">- Abraham Josef</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="contact-info bottom">
                            <h2>Contacts</h2>
                            <address>
                                E-mail: <a href="mailto:someone@example.com">email@email.com</a> <br></br>
                                Phone: +1 (123) 456 7890 <br></br>
                                Fax: +1 (123) 456 7891 <br></br>
                            </address>

                            <h2>Address</h2>
                            <address>
                                Unit C2, St.Vincent's Trading Est., <br></br>
                                Feeder Road, <br></br>
                                Bristol, BS2 0UY <br></br>
                                United Kingdom <br></br>
                            </address>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="contact-form bottom">
                            <h2>Send a message</h2>
                            <form id="main-contact-form" name="contact-form" method="post" action="sendemail.php">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" required="required"
                                           placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" required="required"
                                           placeholder="Email Id"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" required="required" className="form-control"
                                              rows="8" placeholder="Your text here"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-submit" value="Submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="copyright-text text-center">
                            <p>&copy; Your Company 2014. All Rights Reserved.</p>
                            <p>Designed by <a target="_blank" href="http://www.themeum.com">Themeum</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}