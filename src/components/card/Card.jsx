import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import './Card.scss';

const CustomCard = styled(Link)``;

const Card = ({ id, name, email, company }) => {
  const routeID = useLocation().pathname.split('/').pop();

  return (
    <CustomCard
      className={routeID === id.toString() ? 'card active' : 'card'}
      to={`/users/photos/${id}`}
    >
      <p>{name}</p>
      <p>{email}</p>
      <p>{company}</p>
    </CustomCard>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default Card;
