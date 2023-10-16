import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import { auth } from '../firebase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            history.push('/dashboard'); // Redirect to the dashboard or the desired page after successful login
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
                        <h2>Login</h2>
                        <form onSubmit={handleLogin}>
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
                            {error && <p className="text-danger">{error}</p>}
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer pageScripts={[]} /> {/* Pass scripts if needed */}
        </>
    );
};

export default Login;
