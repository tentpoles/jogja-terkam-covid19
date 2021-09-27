import React, { useEffect } from 'react'


import Navigation from "../Navigation";
import HomeChart from './HomeChart';
import HomeRegionList from './HomeRegionList';
import HomeInformation from './HomeInformation';
import HomeFooter from './HomeFooter';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="container">
                <HomeRegionList></HomeRegionList>
                <HomeChart></HomeChart>
                <HomeInformation></HomeInformation>
                <HomeFooter></HomeFooter>
            </div>
            <Navigation></Navigation>
        </>
    )
}

export default Home;