import React from "react";
import './header.css';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return(
      <header className="masslift-header">
      <div className="header-bar">
        <div className="header-left-side">
          <div className="masslift-logo">Masslift</div>
          <div className="community-menu button-highlight">communities</div>
          <div className="massdrop-made button-highlight">massdrop made</div>
        </div>
        <div className="header-right-side">
          <form className='search-bar'>
            <div className="input-container">
              <input type="text" placeholder="Search..."></input>
              <span className="fa fa-search spancon search-glass"></span>
            </div>
          </form>
          <div className="notification-container">
            <span className="fa fa-bell"></span>
          </div>
          <div className="dropdown-container">
            <span className="fa fa-ellipsis-v"></span>
          </div>
        </div>
        <div className="notification-bell"></div>
        <div className="avatar"></div>
        <div className="dropdown-menu"></div>
      </div>
      </header>
    )
  }
}

export default Header;