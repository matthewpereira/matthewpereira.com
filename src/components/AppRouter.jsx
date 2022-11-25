import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import App from './App';

const AppRouter = () => {

    const { isLoading, error } = useAuth0();

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (isLoading) {
        return <div>...</div>;
    }

    return (
        <Router>
            <div>
                <Route
                    path={`/:albumId`}
                    component={App}
                />
                <Route
                    exact
                    path={`/`}
                    component={App}
                />
            </div>
        </Router>
    )
};

export default AppRouter;