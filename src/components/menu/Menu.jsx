import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import './Menu.scss';

const CustomLink = styled(Link)`
  display: inline-flex;
  padding: 10px;

  text-decoration: none; color: #FFF;

  transition: all 200ms ease-out;

  &:hover, &.active {
    background-color: #FFF;
    color: #555;
  }
`;

const Menu = ({ id }) => (
  <nav className="menu">
    <CustomLink className={useLocation().pathname.match('/users/photos/') ? 'active' : ''} to={`/users/photos/${id}`}>Photos</CustomLink>
    <CustomLink className={useLocation().pathname.match('/users/posts/') ? 'active' : ''} to={`/users/posts/${id}`}>Posts</CustomLink>
  </nav>
);

export default Menu;
