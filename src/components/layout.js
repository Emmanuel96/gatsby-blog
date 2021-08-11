import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {container, 
        heading, 
        navLinks, 
        navLinkItem, 
        siteTitle,
        navLinkText} from './layout.module.css'

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
        <div className={container}>
            <title>{ data.site.siteMetadata.title }</title>
            <header className={siteTitle}>{ data.site.siteMetadata.title }</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/blog">Blog Page</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{ pageTitle }</h1>
                {children}
            </main> 
        </div>
    )
}

export default Layout