import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-awesome-styled-grid';

import Card from '../card/Card';

const CustomAside = styled.aside`
  width: 100%;
  background-color: #87888C;
`;

const Sidebar = () => (
  <Col xs={4} md={2} lg={2}>
    <CustomAside>
      <Card />
      <Card />
      <Card />
    </CustomAside>
  </Col>
);

export default Sidebar;
