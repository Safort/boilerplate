import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Match, Miss } from 'react-router';

import * as testActions from '../actions/test';

import Menu from '../components/menu/index.jsx';
import Home from '../components/home/index.jsx';
import Page1 from '../components/page1/index.jsx';
import Page2 from '../components/page2/index.jsx';
import NoMatch from '../components/no-match/index.jsx';

import styles from './index.css';


const App = props => (
  <BrowserRouter>
    <div className={styles.app}>
      <Menu />
      <div className="pages">
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/page1" component={Page1} />
          <Match pattern="/page2" component={Page2} />
          <Miss component={NoMatch} />
      </div>
    </div>
  </BrowserRouter>
);


function mapStateToProps({ test }) {
  return { test };
}


function mapDispatchToProps(dispatch) {
  return {
    testActions: bindActionCreators(testActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
