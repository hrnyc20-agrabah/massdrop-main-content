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
              <i className="fa fa-search icon search-glass"></i>
            </div>
          </form>
          <div className="notification-container">
            <i className="fa fa-bell"></i>
          </div>
          <div className="dropdown-container">
            <i className="fa fa-ellipsis-v"></i>
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