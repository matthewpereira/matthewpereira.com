import React                 from 'react';
import {
    BrowserRouter as Router,
    Route
}                            from "react-router-dom";
import App                   from '../components/App';

const AppRouter = () => {
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
}

export default AppRouter;