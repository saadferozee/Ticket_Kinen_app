import React from 'react';
import BannerSection from '../Components/BannerSection';
import AddSection from '../Components/AddSection';
import PopularRoutes from '../Components/PopularRoutes';
import AboutSection from '../Components/AboutSection';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <AddSection></AddSection>
            <PopularRoutes></PopularRoutes>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;