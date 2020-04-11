import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

const Menu = () => (
  <nav className="menu">
    <Link to="/">Photos</Link>
    <Link to="/posts">Posts</Link>
  </nav>
);

export default Menu;
