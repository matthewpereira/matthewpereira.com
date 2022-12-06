import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Albums from "./Albums";
import App from "./App";

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
        <Switch>
          <Route exact path={`/albums`} component={Albums} />
          <Route path={`/:albumId`} component={App} />
          <Route exact path={``} component={App} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
