import React from "react";
import Axios from 'axios';
import Header from './header';
import Info from './info';
import Navigation from './navigation';
import Overview from './overview';
import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div id="carousel"></div>
        <Info />
        <Navigation />
        <Overview />
      </React.Fragment>
    )  
}
}

export default App;