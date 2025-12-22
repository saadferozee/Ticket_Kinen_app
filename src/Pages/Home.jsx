import React from 'react';
import BannerSection from '../Components/BannerSection';
import AddSection from '../Components/AddSection';
import TravelPartnerSection from '../Components/TravelPartnerSection';
import AboutSection from '../Components/AboutSection';
import LatestTicketSection from '../Components/LatestTicketSection';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <AddSection></AddSection>
            <LatestTicketSection></LatestTicketSection>
            <TravelPartnerSection></TravelPartnerSection>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;