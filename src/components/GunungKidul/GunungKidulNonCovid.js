import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from '@emotion/styled';

const HospitalListContainer = styled.section`
    width: 100%;
    padding: 32px 12px;
    overflow: hidden;
    position: relative;
    background: var(--primary-bg-color);
    min-height: calc(100vh - 196px)
`;

const HospitalList = styled.div`
    display: flex;
    max-width: 744px;
    margin: 0 auto;
    align-items: center;
    flex-wrap: wrap;
`;

const HospitalCard = styled.div`
    flex: 0 0 50%;
    padding: 12px;
    @media (max-width: 520px) {
        flex: 0 0 100%;
    }
`;

const Hospital = styled.div`
    height: 220px;
    overflow: hidden;
    position: relative;
    border-radius: 12px;
    transition: all .25s ease-in-out;
    background: var(--img-bg-color);
    img {
        z-index: 0;
        top: 50%;
        left: 50%;
        transition: all .25s ease-in-out;
        transform: translate(-50%, -50%);
        position: absolute;
        height: 230px;
        @media (max-width: 520px) {
            height: 290px;
        }
    }
    .fa-long-arrow-alt-right {
        z-index: 2;
        opacity: 0;
        transition: all .25s ease-in-out;
        transform: translateX(-20px);
        font-size: 24px;
        color: var(--white-color);
        padding: 26px 0 0 24px;  
        position: absolute;
        top: 0;
        left: 0;
    }
    &:hover {
        filter: grayscale(100%);
        box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.15);
    }
    &:hover > .fa-long-arrow-alt-right {
        opacity: 1;
        transform: translateX(0);
    }
    &:hover > img {
        transform: translate(-50%, -50%) scale(1.1);
    }
    .dark-overlay {
        inset: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.25);
        z-index: 1;
    }
`;

const HospitalDesc = styled.div`
    color: var(--white-color);
    position: absolute;
    z-index: 3;
    bottom: 0;
    width: 100%;
    padding: 26px 24px;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.75) 0%,
        rgba(0, 0, 0, 0) 100%
    );
    h3 {
        font-size: 16px;
        letter-spacing: 0.4mm;
        font-weight: var(--font-bold);
        margin-bottom: 6px;
    }
    h4 {
        font-size: 12px;
        display: inline-block;
        padding: 6px 10px;
        border-radius: 6px;
        margin-bottom: 16px;
        letter-spacing: 0.2mm;
    }
    p {
        font-size: 12px;
        letter-spacing: 0.3mm;
        font-weight: var(--font-medium);
    }
    .bed-available {
        background: rgba(42, 163, 52, 0.75);
    }
    .bed-not-available {
        background: rgba(248, 28, 28, 0.75);
    }
`;

const KulonProgoNonCovid = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetchData()
        .then((request) => {
            setHospitals(request.data.hospitals);
            setLoading(false);
        })
        .catch((error) => console.error(error));
    }, []);

    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchData = async () => {
        const request = await axios.get('https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=34prop&cityid=3403&type=2');
        return request;
    }

    return (
        <>
            <HospitalListContainer>
                <HospitalList>
                    {loading && <div className="ripple-loading"><div></div><div></div></div>}
                    {hospitals && hospitals.map((hospital, index) => 
                        <HospitalCard key={index}>
                            <Link to={`/hospitalid=${hospital.id}&type=2`}>
                                <Hospital className='animate__animated animate__fadeInUp'>
                                    <span className='dark-overlay'></span>
                                    <span className='fa fa-long-arrow-alt-right'></span>
                                    <img src={`https://firebasestorage.googleapis.com/v0/b/terkam-covid-19.appspot.com/o/${hospital.id}-min.jpg?alt=media`} alt="" />
                                    <HospitalDesc>
                                        {
                                            hospital.available_beds && hospital.available_beds.length === 0 ?
                                            <h4 className='bed-not-available'>Tidak Tersedia</h4>
                                            :
                                            <h4 className='bed-available'>
                                                Tersedia&nbsp;
                                                {hospital.available_beds.map(countBed => countBed.available).reduce((a, b) => a + b, 0)}
                                                &nbsp;Kamar
                                            </h4>
                                        }
                                        <h3>{hospital.name && hospital.name.length > 18 ? hospital.name.substring(0,18) + '...' : hospital.name}</h3>
                                        <p>{hospital.info && hospital.info.length > 30 ? hospital.info.substring(0,28) : hospital.info}.</p>
                                    </HospitalDesc>
                                </Hospital>
                            </Link>
                        </HospitalCard>
                    )}
                </HospitalList>
            </HospitalListContainer>
        </>
    )
}

export default KulonProgoNonCovid;