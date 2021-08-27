
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import logo1 from "../../images/logo/logo-dark.png"
import logo2 from "../../images/logo/logo-light.png"

const Nav = () => {
    return (
            <div className="header-inner">
                <div className="container position-relative">
                    <div className="row justify-content-between align-items-center">

                        <div className="col-xl-3 col-auto">
                                <div className="header-logo">
                                    <Link to="/">
                                        {/* <img className="dark-logo" src={logo1} alt="Learts Logo"/>
                                        <img className="light-logo" src={logo2} alt="Learts Logo"/> */}
                                    </Link>
                                </div>
                        </div>

                        <div className="col d-none d-xl-block position-static">
                            <nav className="site-main-menu menu-hover-1">
                                <ul>
                                    <li className="position-static">
                                        <Link to="/"><span className="menu-text">Blogs</span></Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-xl-3 col-auto">
                            <div className="header-right">
                                <div className="inner">
                                    <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                        <button className="toggle">
                                            <i className="icon-top"></i>
                                            <i className="icon-middle"></i>
                                            <i className="icon bottom"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default Nav
