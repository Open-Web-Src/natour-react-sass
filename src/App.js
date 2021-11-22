import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import { ROUTE } from './commons/constants';
import { HomePage } from './modules/landing-page';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Route 
                    path={ROUTE.HOME} 
                    component={HomePage} 
                    exact 
                />
            </Router>
        </React.Fragment>
    );
}

export default App;