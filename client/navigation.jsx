import React from "react";
import './navigation.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="navigation">
        <div className="navigation-container">
          <div className="navigation-tab">
            <span className="tab-options overview-tab">overview</span>
            <span className="separator">|</span>
            <span className="tab-options specs-tab">specs</span>
            <span className="separator">|</span>
            <span className="tab-options reviews-tab">reviews</span>
            <span className="separator">|</span>
            <span className="tab-options discussions-tab">discussions</span>
            <span className="separator">|</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;