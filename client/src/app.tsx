import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Menu from './components/menu';
import Home from './containers/home';
import Page1 from './containers/page1';
import Page2 from './containers/page2';
import NoMatch from './containers/no-match';
import styles from './index.css';

const App = (): JSX.Element => (
  <Router>
    <div className={styles.app}>
      <Menu />
      <div className="pages">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
