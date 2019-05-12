// @flow
import React, { Component } from "react";
import ContainerFamous from './Container';
import Name from './Name';
import PublishedDate from './PublishedDate';
import Description from './Description';
import VotePanel from './VotePanel';
import ScoringBar from './ScoringBar';
import ProgressBar from './ProgressBar';
import { ReactComponent as Like } from '../../../utils/images/home/like.svg';

type Props = {
  name: string,
  image: string,
  field: string,
  description: string,
  date: string
};

function Famous({
  name,
  image,
  field,
  description,
  date
}: Props) {
  return (
    <ContainerFamous image={image}>
      <Name>{name}</Name>
      <PublishedDate>
        <time>{date}</time>
        <span> in {field}</span>
      </PublishedDate>
      <Description>{description}</Description>
      <VotePanel />
      <ScoringBar>
        <ProgressBar className="up">
          <Like className="like" width="30px" height="30px" />
          <span className="percent">50</span>
          <span className="percentsign">%</span>
        </ProgressBar>
        <ProgressBar className="down">
          <span className="percent">50</span>
          <span className="percentsign">%</span>
          <Like className="dislike" width="30px" height="30px" />
        </ProgressBar>
      </ScoringBar>
    </ContainerFamous>
  );
}

export default Famous;