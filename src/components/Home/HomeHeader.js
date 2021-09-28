import React from 'react';
import Particles from "react-tsparticles"
import ParticleConfig from "../../config/particle-config"

import styled from '@emotion/styled';

const HeaderContainer = styled.header`
    width: 100%;
    #tsparticles {
        height: 400px;
        @media (max-width: 520px) {
            height: 200px;
        }
    }
`;

const HomeHeader = () => {
    return (
        <>
            <HeaderContainer className='animate__animated animate__fadeIn'>
                <Particles params={ParticleConfig}></Particles>
            </HeaderContainer>
        </>
    )
}

export default HomeHeader;
