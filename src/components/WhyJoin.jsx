import React from 'react';

import WhyJoinHero from '../Pages/WhyJoinHero';
import WhyJoinMembershipOffers from '../Pages/WhyJoinMembershipOffers';
import WhyJoinServices from '../Pages/WhyJoinServices';

const WhyJoin = () => {
  return (
    <div className="w-full">
        <WhyJoinHero />
        <WhyJoinServices />
        <WhyJoinMembershipOffers />
        

    </div>
  )
}

export default WhyJoin