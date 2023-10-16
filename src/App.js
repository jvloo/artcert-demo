import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Upload from './components/Upload';

const App = () => {
    return (
        <Router>
            <div>
                <Header />

                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/upload" component={Upload} />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
