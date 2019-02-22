import React from "react";
import ReactDOM from "react-dom";
import App from "./app"
import {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Route path="/:id" component={App}></Route>
    {/* <App/> */}
  </BrowserRouter>, document.getElementById("main-content"));

// ReactDOM.render(<App/>, document.getElementById('main-content'));