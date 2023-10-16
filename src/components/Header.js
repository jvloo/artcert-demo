import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ loggedIn, userName, onLogout, pageStyles }) => {
    return (
        <>
            <head>
                {/* Meta Tags */}
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>ArtCert - Empowering Digital Creators with Next-Gen Art Certification</title>

                {/* Shared stylesheets */}
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.18.0/font/bootstrap-icons.css" />
                <link rel="stylesheet" href="./static/css/app.css" />

                {pageStyles && <link rel="stylesheet" href={pageStyles} />}
            </head>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">
                    <i className="bi bi-palette mr-2"></i>ArtCert
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {loggedIn ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <i className="bi bi-person mr-1"></i>Welcome, {userName}!
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-link nav-link" onClick={onLogout}>
                                        <i className="bi bi-box-arrow-right mr-1"></i>Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">
                                        <i className="bi bi-person-plus mr-1"></i>Sign Up
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        <i className="bi bi-box-arrow-in-right mr-1"></i>Log In
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;
