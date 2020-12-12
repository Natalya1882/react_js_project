import React from 'react'
import {a} from "react-router-dom";

export function Header(){
    return (
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 overflow">
                        <div className="social-icons pull-right">
                            <ul className="nav nav-pills">
                                <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                                <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                                <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-inverse" role="banner">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <a className="navbar-brand" href="/">
                            <h1><img src="images/logo.png" alt="logo"/></h1>
                        </a>

                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><a href="/">Home</a></li>
                            <li className="dropdown active"><a href="#">Pages <i className="fa fa-angle-down"></i></a>
                                <ul role="menu" className="sub-menu">
                                    <li><a href="/aboutus">About</a></li>
                                    <li><a href="/contact">Contact us</a></li>
                                </ul>
                            </li>

                            <li className="active"><a href="/portfolio">Portfolio </a></li>
                        </ul>
                    </div>
                    <div className="search">
                        <form role="form">
                            <i className="fa fa-search"></i>
                            <div className="field-toggle">
                                <input type="text" className="search-form" autoComplete="off" placeholder="Search"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}