import React from 'react';
import { Link } from 'react-router';
import styles from './index.css';


const Menu = () => (
  <div className={styles.menu}>
    <Link className={styles.item} to={`/`}>Home</Link>
    <Link className={styles.item} to={`/page1`}>Page 1</Link>
    <Link className={styles.item} to={`/page2`}>Page 2</Link>
  </div>
);


export default Menu;
