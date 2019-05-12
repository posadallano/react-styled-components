import React from 'react';

import Wrapper from '../../components/Wrapper'
import Hero from '../../components/Hero';
import SpeakOutBanner from '../../components/SpeakOutBanner';
import SubmitBanner from '../../components/Submit';
import VotingPanel from '../../components/VotingPanel';

function Home (){
    return (
        <div>
            <Hero className="main"/>
            <Wrapper>
              <div>
                <SpeakOutBanner />
                <VotingPanel />
                <SubmitBanner />
              </div>  
            </Wrapper>
        </div>
    );
}

export default Home;