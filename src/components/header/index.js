import * as React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery,graphql} from 'gatsby'
import PropTypes from 'prop-types'
import SchemaOrg from './schema-org'
// import

function Header({
    descrription = "description"
})
{
    return (
        <>
        <Helmet>
            <title></title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>
                
            </title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <link rel="stylesheet" href="/assets/css/vendor/font-awesome-pro.min.css"/>

            {/* <!-- Main Style CSS --> */}
            {/* <!-- Use the minified version files listed below for better performance and remove the files listed above --> */}
        </Helmet>
        </>
    )
    }