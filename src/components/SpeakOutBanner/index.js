// @flow
import React from 'react';
import { ReactComponent as CloseIcon } from '../../utils/images/home/close.svg';
import Wrapper from './Wrapper';
import Pretitle from './Pretitle';
import Title from './Title';
import ContentBanner from './ContentBanner';

function SpeakOutBanner() {
  return (
    <Wrapper>
      <div>
        <Pretitle>Speak out. Be heard.</Pretitle>
        <Title>Be counted</Title>
      </div>
      <div>
        <ContentBanner>
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
        </ContentBanner>
      </div>
      <div>
        <CloseIcon />
      </div>
    </Wrapper>
  );
}

export default SpeakOutBanner;
