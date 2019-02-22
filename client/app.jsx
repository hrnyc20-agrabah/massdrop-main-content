import React from "react";
import Axios from 'axios';
import Header from './header';
import Info from './info';
import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Info />
      </React.Fragment>
    )  
}
}

export default App;