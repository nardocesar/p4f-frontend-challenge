import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import './App.scss';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

import Routing from '../router/Router';

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Sidebar />
          <Col xs={4} md={6} lg={10}>
            <Routing />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
