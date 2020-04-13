import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../components/menu/Menu';

const Posts = () => {
  const routeID = useLocation().pathname.split('/').pop();
  return (
    <>
      <Menu id={routeID} />
      <section>I`m Posts.</section>
    </>
  );
};

export default Posts;
