import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import { getUsersList } from '../utils/services';
import { loadUsers } from '../modules/redux/actions';

import { Provider } from 'react-redux';
import configureStore from '../modules/redux/store';

import './App.scss';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

const store = configureStore();

const Posts = lazy(() => import('../containers/posts/Posts'));
const Photos = lazy(() => import('../containers/photos/Photos'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getUsersList()
      .then((res) => res.json())
      .then((data) => {
        store.dispatch(loadUsers(data));
        setIsLoaded(true);
      });
  }, []);

  return (
    isLoaded ? (
      <Provider store={store}>
        <Router>
          <Redirect to={{pathname: `/users/photos/${store.getState().users[0].id}`, state: { from: '/' }}} />
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
    ) : <h4>Loading...</h4>

  );
}

export default App;
