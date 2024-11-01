import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
