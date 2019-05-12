// @flow
import React, { Component } from 'react';
import { ReactComponent as Like } from '../../../utils/images/home/like.svg';
import VotingContainer from './VotingContainer';
import VotingButton from './VotingButton';
import LikeDislike from './LikeDislike';

class VoteView extends Component {
  render() {
    return (
      <div>
        <VotingContainer alignItems="center">
          <LikeDislike className="like">
            <Like width="20" height="20px" />
          </LikeDislike>
          <LikeDislike className="dislike">
            <Like width="20" height="20px" />
          </LikeDislike>
          <VotingButton >Vote now</VotingButton>
        </VotingContainer>
      </div>
    );
  }
}

export default VoteView;
