import React from 'react';

const Footer = ({ pageScripts }) => {
    return (
        <>
            {/* Shared scripts */}
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <script defer src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

            {/* Additional Footer Elements */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2023 ArtCert. All rights reserved.</p>
                        </div>
                        <div className="col-md-6">
                            {/* <p>Additional Footer Content</p> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
