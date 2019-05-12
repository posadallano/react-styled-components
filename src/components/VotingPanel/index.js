// @flow
import React from 'react';
import Wrapper from './Wrapper';
import RulingsList from './FamousList';

function VotingPanel() {
  return (
    <Wrapper>
      <h1>Votes</h1>
      <RulingsList />
    </Wrapper>
  );
}

export default VotingPanel;
