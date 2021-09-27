import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./routes";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";

const App = () => {
  return (

    <Router>
      <Switch>
          {routes.map((route, index) => (
              <Route path={route.path} component={route.component} key={index} />
          ))}
          <Route path="/" ><Home /></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
