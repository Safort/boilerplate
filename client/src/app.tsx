import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './components/menu';
import Home from './containers/home';
import Page1 from './containers/page1';
import Page2 from './containers/page2';
import NoMatch from './containers/no-match';
import styles from './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Menu />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
