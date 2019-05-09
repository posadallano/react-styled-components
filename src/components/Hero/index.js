import React, { Component } from "react";

import HeroContent from './Hero';
import wiki from '../../utils/images/home/wikipedia.png';
import ButtonLike from '../ButtonsHero';
import Progress from '../Progress';

class Hero extends Component {
  render () {
    return (
      <HeroContent>
        
          
          <div className="featured">
            <div className="content">
              <span className="pre-title">What's your opinion on</span>
              <h2 className="title">Pope Francis?</h2>
              <p className="description">He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) </p>
              <a href="http://example.com" target="_blank" className="more-info"><img src={wiki} alt="wiki" className="wiki" />More information</a>
              <span className="question">What's Your Verdict?</span>
            </div>
            <div className="blur" />
              <div className="buttons-fc">
              <ButtonLike/>
              <ButtonLike/>
            </div>
          </div>
          <Progress/>
          

        
      </HeroContent>
    );
  }
}

export default Hero;