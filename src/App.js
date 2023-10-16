import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import Upload from './Upload';

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
