import React from 'react';
import { Link } from 'react-router';

const Menu = () => (
  <div className="menu">
    <Link to={`/`}>Home</Link>
    <Link to={`/page1`}>Page 1</Link>
    <Link to={`/page2`}>Page 2</Link>
  </div>
);


export default Menu;
