import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import Header from '../components/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={8} md={2}>
            <span>Hello sidebar!</span>
          </Col>
          <Col xs={8} md={6}>
            <span>Hello content!</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
