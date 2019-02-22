import React from "react";
import './info.css'
import moment from "moment";

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="main-info">
      <div className="main-info-container">
        <div className="path-container">
          <div className="path">massdrop made</div>
          <div className="left-arrow"> > </div>
          {/* {this.props.isMassdropMade ? <div className="path">massdrop made</div> : <div className="path">audiophile</div>} */}
          {/* {this.props.isMassdropMade ? <div className="path">audiophile</div> : <></>} */}
          <div className="path">photography</div>
        </div>
        <div className="product-name-container">
          <div className="product-name">AKG K7XX Stereo Headphones</div>
          <i className="fa fa-bookmark"></i>
          <div className="join-button">
            <div className="join-drop">join drop</div>
          </div>
        </div>
        <span className="price">$69.99</span>
        <div className="review-container">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="reviews">(77 reviews)</span>
        </div>
        <div className="product-container">
          <span className="fa fa-clock-o"></span>
          <div className="product-info">ends {moment().endOf('day').fromNow()}</div>
          <span className="fa fa-cube"></span>
          <div className="product-sold"> 300 sold </div>
          <span className="fa fa-truck"></span>
          <div className="product-shipping">free usa shipping</div>
        </div>
      </div>
    </div>
    )
  }
}

export default Info