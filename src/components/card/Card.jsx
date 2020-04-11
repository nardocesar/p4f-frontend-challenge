import React from 'react';
import styled from 'styled-components';

import './Card.scss';

const CustomCard = styled.a`
`;

const Card = () => (
  <CustomCard className="card" href="#">
    <p>Nome do usuário</p>
    <p>usuario@email.com</p>
    <p>Empresa ME</p>
  </CustomCard>
);

export default Card;
