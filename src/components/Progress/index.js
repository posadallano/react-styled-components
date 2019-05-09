import React, { Component } from "react";
import Container from './Container';
import Label from './Label';
import Days from './Days';

class Progress extends Component {
  render () {
    return (
      <Container>
        <Label>CLOSING IN</Label>
        <Days>
          22 <span>days</span>
        </Days>
      </Container>
    );
  }
}

export default Progress;