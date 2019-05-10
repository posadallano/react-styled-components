import React, { Component } from "react";
import SubmitContent from './SubmitContent';

class SubmitBanner extends Component {
  render () {
    return (
      <SubmitContent >
        <div className="bgimage" />
        <span className="cta">Is ther anyone else you would want us to add?</span>
        <button type="button">Submit a Name</button>
      </SubmitContent>
    )
  }
}

export default SubmitBanner;