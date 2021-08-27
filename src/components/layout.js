import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {container} from './layout.module.css'
import { Helmet } from "react-helmet"

import "../assets/css/vendor/vendor.min.css"
import "../assets/css/plugins/plugins.min.css"
import "../assets/css/style.min.css"
import "../stylesheets/style.css"
import "../dashboard/assets/fonts/font-awesome/css/font-awesome.min.css"
import Nav from '../components/nav'
import Scripts from '../components/scripts'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `)
    return (
        <>
            <Helmet>
                <meta charset="utf-8"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                <link href="../assets/images/favicon.png"/>
                <title>Emmanuel's Blog</title>
                <meta name="robots" content="noindex, follow" />
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css"/>

            </Helmet>

            <Nav/>
            <div className="page-title-section section">
                <div className="page-title">
                    <div className="container">
                        <h1 className="title">Emmanuel's Blog</h1>
                    </div>
                </div>
                
            </div>

            <div className={container}>
                <main>
                    {children}
                </main> 
            </div>
        </>
    )
}

export default Layout