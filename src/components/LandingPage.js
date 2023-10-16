// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LandingPage = () => {
    const pageScripts = [
        'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
        './static/js/landing.js',
    ];

    return (
        <>
            <Header loggedIn={false} userName="" onLogout={() => { }} pageStyles="" />

            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Revolutionizing Art Certification with Blockchain</h1>
                    <p className="lead">ArtCert provides a secure and transparent platform for certifying and showcasing artworks
                        using blockchain technology.</p>
                </div>
            </div>

            {/* Pitch Section */}
            <div className="pitch-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2 className="text-center mb-4">Why Choose ArtCert?</h2>
                            <div className="pitch-text">
                                <p>We believe in empowering artists and providing a trustworthy environment for art collectors.
                                    ArtCert leverages blockchain to ensure:</p>
                                <ul>
                                    <li>Immutable certification of ownership</li>
                                    <li>Transparent history of creative works</li>
                                    <li>Automated smart licensing and royalties</li>
                                    <li>Protection against plagiarism and unauthorized use</li>
                                    <li>Boosted confidence for art collectors and buyers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-container">
                <div className="container">
                    <h2 className="text-center mb-4">Key Features</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-card">
                                <h3>Blockchain Certification</h3>
                                <p>Secure and transparent certification of ownership using blockchain technology.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card">
                                <h3>Automated Licensing</h3>
                                <p>Smart contracts enforce licensing agreements, ensuring fair compensation for artists.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card">
                                <h3>Plagiarism Protection</h3>
                                <p>Blockchain certificates act as a robust defense against plagiarism and unauthorized use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-container">
                <div className="container">
                    <h2 className="text-center mb-4">What Our Users Say</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="testimonial-card">
                                <p>"ArtCert has transformed the way I showcase and protect my digital artworks. The blockchain
                                    certification adds a new level of trust and authenticity."</p>
                                <p className="font-weight-bold">- Artist123</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="testimonial-card">
                                <p>"As an art collector, I appreciate the transparency and security that ArtCert provides. It's
                                    a game-changer in the art world."</p>
                                <p className="font-weight-bold">- Collector456</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="testimonial-card">
                                <p>"The automated licensing and royalty system is fantastic. I can focus on creating art,
                                    knowing that I'll be fairly compensated for my work."</p>
                                <p className="font-weight-bold">- Creative789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="cta-container">
                <div className="container">
                    <h2 className="mb-4">Join ArtCert Today and Revolutionize the Art World!</h2>
                    <p className="lead">Experience the future of art certification and showcase your creativity with confidence.</p>
                    <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>
                </div>
            </div>

            {/* Contact Section */}
            <div className="contact-container">
                <div className="container">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" className="form-control" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer pageScripts={pageScripts} />
        </>
    );
};

export default LandingPage;
