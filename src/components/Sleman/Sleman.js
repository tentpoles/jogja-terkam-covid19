import React, { useEffect } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';


import SlemanCovid from "./SlemanCovid";
import SlemanNonCovid from "./SlemanNonCovid";
import Navigation from "../Navigation";
import styled from '@emotion/styled';

const SubNavContainer = styled.section`
    width: 100%;
    background: var(--subnav-bg-color);
    padding: 42px 24px 0 24px;
`;

const SubNav = styled.div`
    max-width: 720px;
    margin: 0 auto;
    color: var(--white-color);
    h2 {
        font-size: 22px;
        letter-spacing: 0.2mm;
        margin-bottom: 8px;
        @media (max-width: 420px) {
            font-size: 20px;
        }
    }
`;

const Location = styled.div`
    display: flex;
    align-items: center;
    letter-spacing: 0.3mm;
    font-weight: var(--font-medium);
    font-size: 14px;
    margin-bottom: 42px;
    span {
        margin-right: 8px;
    }
    @media (max-width: 420px) {
        font-size: 12px;
    }
`;

const NavLinkContainer = styled.div`
    display: flex;
    align-items: center;
    letter-spacing: 0.35mm;
    font-size: 14px;
    a {
        &:nth-of-type(1) {
            @media (min-width: 521px) {
                margin-right: 12px;
            }
        }
        &:nth-of-type(2) {
            @media (min-width: 521px) {
                margin-left: 12px;
            }
        }
        text-transform: uppercase;
        flex: 0 1 50%;
        position: relative;
        text-align: center;
        white-space: nowrap;
        color: var(--white-color);
        dispay: inline-block;
        padding: 0 24px 24px 24px;
        &.active::before, &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 6px;
            left: 50%;
            border-radius: 6px 6px 0 0;
            transition: all .25s ease-in-out;
            transform: translateX(-50%) scaleY(1);
            transform-origin: bottom;
            bottom: 0;
            background: #4187f6;
        }
        &.active::before {
            transform: translateX(-50%) scaleY(1);
        }
        &::before {
            transform: translateX(-50%) scaleY(0);
        }
        &:hover::before {
            transform: translateX(-50%) scaleY(1);
            opacity: 0.5;
        }
        &.active:hover::before {
            transform: translateX(-50%) scaleY(1);
            opacity: 1;
        }
    }
    @media (max-width: 420px) {
        font-size: 12px;
    }
`;

const Sleman = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="container">
                <SubNavContainer>
                    <SubNav>
                        <h2>Lokasi Sekarang</h2>
                        <Location><span className='fas fa-map-marker-alt'></span><h1>Yogyakarta, Kab. Sleman</h1></Location>
                        <NavLinkContainer>
                            <NavLink to='/sleman/covid'>Covid</NavLink>
                            <NavLink to='/sleman/non-covid'>Non-Covid</NavLink>
                        </NavLinkContainer>
                    </SubNav>
                </SubNavContainer>
                <Switch>
                    <Route path='/sleman/' exact  render={() => (<Redirect to="/sleman/covid" />)} />
                    <Route path='/sleman/covid'><SlemanCovid></SlemanCovid></Route>
                    <Route path='/sleman/non-covid'><SlemanNonCovid></SlemanNonCovid></Route>
                </Switch>
            </div>
            <Navigation />
        </>
    )
}

export default Sleman;
