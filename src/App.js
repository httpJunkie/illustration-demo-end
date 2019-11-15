import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import IllustrationMasterDetail from './components/IllustrationMasterDetail';
import Error404 from './components/Error404';

const App = () => {
  return (
    <div className="app-container pad-one">
      <BrowserRouter>
        <Switch>
          <Route exact path={["/illustrations/:illustration_link", "/illustrations/", "/"]}
            render={(props) => <IllustrationMasterDetail {...props} baseUrl={`/illustrations`} />}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
