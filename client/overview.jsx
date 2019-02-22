import React from "react";
import "./overview.css"

class Overview extends React.Component {
  render() {
    return(
      <div className="overview">
        <div className="text-container">
          <div className="overview-container">
            <div className="overview-header">Header Description</div>
            <div className="overview-body">Body Description</div>
            <div className="carousel"></div>
          </div>
          <div className="specs-container">
            <span className="overview-header">specs</span>
            <ul>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
            <span className="overview-header">included</span>
            <ul>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Overview;