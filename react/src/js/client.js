import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Video from "./pages/Video";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="articles(/:article)" name="articles" component={Articles}></Route>
      <Route path="video" name="video" component={Video}></Route>
    </Route>
  </Router>,
app);