import React, { Component } from "react";

import FooterContent from './Footer';
import Wrapper from '.././Wrapper';
import fb from '../../utils/images/home/facebook.png';
import tw from '../../utils/images/home/twitter.png';

class Footer extends Component {
  
  render () {
    return (
      <Wrapper> 
        <FooterContent >
            <ul className="nav-f left">
              <a href="#" className="nav-f">Terms and Conditions</a>
              <a href="#" className="nav-f">Privacy Policy</a>
              <a href="#" className="nav-f">Contact Us</a>
            </ul>
            <ul className="nav-f right">
              <span>Follow Us</span>
              <a href="http://example.com" target="_blank"><img className="nav__link right icon-social" src={fb}/></a>
              <a href="http://example.com" target="_blank"><img className="nav__link right icon-social" src={tw}/></a>
            </ul>
        </FooterContent>
      </Wrapper> 
    )
  }

}

export default Footer;