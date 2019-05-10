import React from 'react';

import Wrapper from '../../components/Wrapper'
import Hero from '../../components/Hero';
import InvitationBanner from '../../components/InvitationBanner';
import SubmitBanner from '../../components/Submit';

function Home (){
    return (
        <div>
            <Hero className="main"/>
            <Wrapper>
              <div>
                <InvitationBanner />
                <SubmitBanner />
              </div>  
            </Wrapper>
        </div>
    );
}

export default Home;