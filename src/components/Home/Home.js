import React, { useEffect } from 'react'


import Navigation from "../Navigation";
import HomeChart from './HomeChart';
import HomeRegionList from './HomeRegionList';
import HomeInformation from './HomeInformation';
import HomeFooter from './HomeFooter';
import HomeHeader from './HomeHeader';
import HomeContribute from './HomeContribute';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="container">
                <HomeHeader></HomeHeader>
                <HomeRegionList></HomeRegionList>
                <HomeChart></HomeChart>
                <HomeInformation></HomeInformation>
                <HomeContribute></HomeContribute>
                <HomeFooter></HomeFooter>
            </div>
            <Navigation></Navigation>
        </>
    )
}

export default Home;
