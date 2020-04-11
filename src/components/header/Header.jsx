import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import './Header.scss';

import ReactLogo from '../../utils/images/logo.svg';

const Logo = styled.img`
  display: flex;
  width: 100px;
  margin: 0 auto;
`;

const CustomHeader = styled.header`
  margin-bottom: 1.5rem;
`;

const Header = () => (
  <CustomHeader>
    <Container>
      <Row>
        <Col xs={12}>
          <Logo src={ReactLogo} />
        </Col>
      </Row>
    </Container>
  </CustomHeader>
);

export default Header;
