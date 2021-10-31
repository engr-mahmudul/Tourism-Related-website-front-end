import React from 'react';
import Banner from '../Banner/Banner';
import ExtraServices from '../ExtraServices/ExtraServices';
import ExtraService from '../ExtraServices/ExtraServices';
import FreeService from '../FreeService/FreeService';
import HomeServices from '../HomeServices/HomeServices';
import Navigation from '../Navigation/Navigation';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <ExtraServices></ExtraServices>
            <FreeService></FreeService>
        </div>
    );
};

export default HomePage;