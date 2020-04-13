import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import usersReducer from '../modules/redux/reducers';

import './App.scss';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Posts = lazy(() => import('../containers/posts/Posts'));
const Photos = lazy(() => import('../containers/photos/Photos'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Redirect to={{pathname: `/users/photos/${store.getState()[0].id}`, state: { from: '/' }}} />
        <Header />
        <Container fluid>
          <Row>
            <Sidebar />
            <Col xs={4} md={6} lg={10}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/users/photos/:id" component={Photos} />
                  <Route exact path="/users/posts/:id" component={Posts} />
                </Switch>
              </Suspense>
            </Col>
          </Row>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
