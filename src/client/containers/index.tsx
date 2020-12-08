import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Menu from '../components/menu';
import Home from '../components/home';
import Page1 from '../components/page1';
import Page2 from '../components/page2';
import NoMatch from '../components/no-match';

import styles from './index.css';

const App = () => (
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
