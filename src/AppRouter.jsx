import styles from './index.scss';

import React                 from 'react';
import { 
    BrowserRouter as Router, 
    Route 
}                            from "react-router-dom";
import ScrollToTop           from './ScrollToTop.jsx';
import App                   from './app.jsx';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <ScrollToTop />
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