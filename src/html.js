import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
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

        {/* Google Tag Manager */}
        {/* <script>
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-526BF97');
        </script> */}
        {/* End Google Tag Manager */}

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8VJKVTDH7Q"></script>
        {/* <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-8VJKVTDH7Q');
        </script> */}
        {/* End of Global site tag */}
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.png"/>
        {/* CSS
      ============================================ */}

        {/* <!-- Vendor CSS (Bootstrap & Icon Font) --> */}
        <link rel="stylesheet" href="/assets/css/vendor/font-awesome-pro.min.css"/>

        {/* <!-- Main Style CSS --> */}
        {/* <!-- Use the minified version files listed below for better performance and remove the files listed above --> */}

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src='/jquery-3.4.1.min.js'></script>

        <script src="vendor.min.js"></script>
        <script src="/plugins.min.js"></script>

        <script src="/main.js"></script>

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
