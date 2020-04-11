import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Posts = lazy(() => import('../containers/posts/Posts'));
const Photos = lazy(() => import('../containers/photos/Photos'));

const Routing = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routing;
