import React, { Component } from "react";

import Button from './ButtonLike';
import { ReactComponent as Like } from '../../utils/images/home/like.svg';

class ButtonLike extends Component {
  render () {
    return (
        <Button>
          <Like className="like" />
        </Button>
    );
  }
}

export default ButtonLike;