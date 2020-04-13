import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../../components/menu/Menu';

const Photos = () => {
  const routeID = useLocation().pathname.split('/').pop();
  return (
    <>
      <Menu id={routeID} />
      <section>I`m photos.</section>
    </>
  );
};

export default Photos;
