import React, { Component } from "react";

import Wrapper from '.././Wrapper'
import Menu, { MenuItem } from "./Menu";
import MenuButton from "./MenuButton";
import Brand from "./Brand";
import HeaderContainer from "./Header";

class NavBar extends Component {
  state = {
    isMenuHidden: true
  };

  onToggleMenu = () => {
    this.setState((prevState, props) => {
      return { isMenuHidden: !prevState.isMenuHidden };
    });
  };

  render() {
    return (
      <HeaderContainer>
        <Wrapper className="header">
          <Brand href="/">Rule of Thumb.</Brand>
          <Menu isHidden={this.state.isMenuHidden}>
            <MenuItem href="/pasttrials">Past Trials</MenuItem>
            <MenuItem href="/howitworks">How It Works</MenuItem>
            <MenuItem href="/login">Log In / Sign Up</MenuItem>
          </Menu>
          <MenuButton onClick={this.onToggleMenu} />
        </Wrapper>
      </HeaderContainer>
    );
  }
}

export default NavBar;
