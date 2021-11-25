import React from 'react';
// import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBaner from './AppoientmentBanner/AppointmentBaner';
import Banner from './Banner/Banner';
import Doctor from './Doctor/Doctor';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services></Services>
            <AppointmentBaner></AppointmentBaner>
            <Doctor></Doctor>
        </div>
    );
};

export default Home;