import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import { auth } from '../firebase';

const SignUp = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await auth.createUserWithEmailAndPassword(email, password);
            history.push('/dashboard'); // Redirect to the dashboard or the desired page after successful registration
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Header loggedIn={false} userName="" onLogout={() => { }} pageStyles="" />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-danger">{error}</p>}
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer pageScripts={[]} /> {/* Pass scripts if needed */}
        </>

    );
};

export default SignUp;
