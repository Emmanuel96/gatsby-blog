import React from 'react';
export const onPreRenderHTML = ({ replacePostBodyComponents , getPostBodyComponents  }) => {
    const bodyComponents = getPostBodyComponents ().concat([
        <>
            <script src="assets/js/vendor/modernizr-3.6.0.min.js"></script>
            <script src="assets/js/vendor/jquery-3.4.1.min.js"></script>
            <script src="assets/js/vendor/jquery-migrate-3.1.0.min.js"></script>
            <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>

            <script src="assets/js/plugins/parallax.min.js"></script>
            <script src="assets/js/plugins/jquery.ajaxchimp.min.js"></script>

            <script src="/assets/js/vendor/vendor.min.js"></script>
            <script src="/assets/js/plugins/plugins.min.js"></script>
        </>
    ]);
    replacePostBodyComponents(bodyComponents);
}