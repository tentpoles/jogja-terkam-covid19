import React, { useEffect, useState } from 'react';
// import GoogleMapReact from 'google-map-react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Navigation from "./Navigation";
import styled from '@emotion/styled';

const HospitalImageContainer = styled.section`
    position: relative;
    width: 100%;
    overflow-y: hidden;
    background: var(--subnav-bg-color);
    .bg-image {
        filter: grayscale(25%) blur(10px);
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const HospitalImage = styled.div`
    max-width: 720px;
    margin: 0 auto;
`;


const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    .btn-back {
        cursor: pointer;
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        top: 24px;
        left: 24px;
        z-index: 10;
        display: flex;
        align-items: center;
        transition: all .25s ease-in-out;
        justify-content: center;
        background: rgba(255, 255, 255, 0.65);
        .fa-arrow-left {
            font-size: 14px;
            color: var(--primary-bg-color);
        }
        &:hover {
            background: rgba(255, 255, 255, 1);
        }
    }
    img {
        position: absolute;
        height: 480px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
    }
    .dark-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.25);
        z-index: 2;
        pointer-events: none;
    }
`;

const HospitalInfo = styled.div`
    padding: 0 24px 82px 24px;
    position: absolute;
    color: var(--white-color);
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.75) 0%,
        rgba(0, 0, 0, 0) 100%
    );
    h2 {
        font-size: 22px;
        letter-spacing: 0.2mm;
        margin-bottom: 6px;
    }
    @media (max-width: 300px) {
        white-space: nowrap;
    }
    .name-hide-medium {
        @media (max-width: 320px) {
            display: none;
        }
    }
    .name-hide-large {
        @media (min-width: 321px) {
            display: none;
        }
    }
    .address-hide-medium {
        @media (max-width: 560px) {
            display: none;
        }
    }
    .address-hide-large {
        @media (min-width: 561px) {
            display: none;
        }
    }
`;

const HospitalAddress = styled.div`
    display: flex;
    align-items: center;
    letter-spacing: 0.3mm;
    font-weight: var(--font-medium);
    font-size: 14px;
    span {
        margin-right: 8px;
    }
`;

const HospitalDescContainer = styled.section`
    position: relative;
    z-index: 10;
    max-width: 720px;
    margin: -58px auto 0 auto;
    padding: 0 24px;
`;

const HospitalDesc = styled.div`
    width: 100%;
    padding: 24px 24px;
    border-radius: 12px;
    color: var(--primary-bg-color);
    background: rgba(255, 255, 255, 0.65);
    overflow-x: auto;
    .hide-small {
        @media (max-width: 340px) {
            display: none;
        }
    }
    .hospital-description {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: var(--font-regular);
        white-space: nowrap;
        .icon {
            position: relative;
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            font-size: 10px;
            background: var(--primary-bg-color);
            font-weight: var(--font-bold);
            color: var(--white-color);
            border-radius: 6px;
            margin-right: 8px;
            i {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        a {
            color: var(--primary-bg-color);
            &:hover {
                text-decoration: underline;
            }
            .fa-long-arrow-alt-right {
                transition: all .25s ease-in-out;
                transform: translateX(-6px);
                opacity: 0;
            }
            &:hover > .fa-long-arrow-alt-right {
                opacity: 1;
                transform: translateX(8px);
            }
        }
    }
    & > * + * {
        margin-top: 12px;
    }
`;

const HospitalRoomContainer = styled.section`
    position: relative;
    max-width: 720px;
    margin: 24px auto 0 auto;
    padding: 0 24px;
    overflow: hidden;
    margin-bottom: 42px;
`;

const HospitalRoom = styled.div`
    width: 100%;
    border-radius: 12px;
    color: var(--primary-bg-color);
    background: rgba(255, 255, 255, 0.65);
    article {
        padding: 32px 24px;
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
        .room-title {
            font-size: 20px;
            font-weight: var(--font-bold);
            text-transform: capitalize;
        }
        .last-update {
            display: inline-block;
            padding: 4px 8px;
            font-size: 12px;
            border: 1px solid var(--primary-bg-color);
            border-radius: 4px;
            margin-top: 16px;
            letter-spacing: 0.2mm;
            .hide-small {
                @media (max-width: 520px) {
                    display: none;
                }
            }
        }
        .available-room {
            font-size: 14px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            span {
                display: flex;
                align-items: center;
                margin: 12px 16px 0 0;
            }
            i {
                width: 22px;
                font-size: 16px;
            }
            .fas.fa-check-circle {
                color: rgba(42, 163, 52);
            }
        }
    }
`;

const HospitalDetail = ({match}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        getMapsLocation()
        .then((request) => {
            setGoogleMaps(request.data.data.gmaps);
            // setMapLocation(prevMapLocation => ({
            //     ...prevMapLocation,
            //     lat: request.data.data.lat,
            //     lng: request.data.data.long,
            // }));
        })
        .catch((error) => console.error(error));
        //eslint-disable-next-line
    }, [match.params.hospitalid]);

    useEffect(() => {
        fetchData()
        .then((request) => {
            setHospital(request.data.data);
            setLoading(false);
        })
        .catch((error) => console.error(error));
        //eslint-disable-next-line
    }, [match.params.hospitalid, match.params.typeid]);

    const fetchData = async () => {
        const request = await axios.get(`https://rs-bed-covid-api.vercel.app/api/get-bed-detail?hospitalid=${match.params.hospitalid}&type=${match.params.typeid}`);
        return request;
    }

    const getMapsLocation = async () => {
        const request = await axios.get(`https://rs-bed-covid-api.vercel.app/api/get-hospital-map?hospitalid=${match.params.hospitalid}`);
        return request;
    }

    const history = useHistory();
    const [hospital, setHospital] = useState([]);
    const [googleMaps, setGoogleMaps] = useState('');
    // const [mapLocation, setMapLocation] = useState({lat: '', lng: ''});
    const [loading, setLoading] = useState(true);

    return (
        <>
            <div className="container">
                {
                    loading ? <div className="ripple-loading"><div></div><div></div></div>
                
                    :

                    <>
                        <HospitalImageContainer className='animate__animated animate__fadeIn'>
                            <img src={`https://firebasestorage.googleapis.com/v0/b/terkam-covid-19.appspot.com/o/${hospital.id}-min.jpg?alt=media`} alt="" className='bg-image' />
                            <HospitalImage>
                                <ImgContainer>
                                    <span className='dark-overlay'></span>
                                    <span className='btn-back animate__animated animate__fadeIn animate__delay-1s animate__slow' onClick={() => {history.goBack()}} title='Kembali'>
                                        <i className='fas fa-arrow-left'></i>
                                    </span>
                                    <img src={`https://firebasestorage.googleapis.com/v0/b/terkam-covid-19.appspot.com/o/${hospital.id}-min.jpg?alt=media`} alt="" />
                                    <HospitalInfo>
                                        <h2 className='name-hide-large animate__animated animate__fadeInLeft'>{hospital.name.length > 16 ? hospital.name.substring(0,16) + '...' : hospital.name}</h2><h2 className='name-hide-medium animate__animated animate__fadeInLeft animate__fast'>{hospital.name}</h2>
                                        <HospitalAddress className='animate__animated animate__fadeInLeft animate__slow'><span className='fas fa-map-marker-alt'></span><h1 className='address-hide-large'>{hospital.address.substring(0,24)}...</h1><h1 className='address-hide-medium'>{hospital.address}</h1></HospitalAddress>
                                    </HospitalInfo>
                                </ImgContainer>
                            </HospitalImage>
                        </HospitalImageContainer>
                        <div className='animate__animated animate__fadeInUp animate__delay-1s animate__slow'>
                            <HospitalDescContainer>
                                <HospitalDesc>
                                    <h4 className='hospital-description'>
                                        <span className='icon'><i className='fas fa-stethoscope'></i></span>Tersedia {hospital.bedDetail.length} Kategori Kelas
                                    </h4>
                                    <h4 className='hospital-description'>
                                        <span className='icon'><i className='fas fa-phone-alt'></i></span>
                                        {
                                            hospital.phone !== 'hotline tidak tersedia' ? <>{hospital.phone} (<span className='hide-small'>Layanan&nbsp;</span>Hotline)</>
                                            : <>Hotline Tidak Tersedia</>
                                        } 
                                    </h4>
                                    <h4 className='hospital-description'>
                                        <span className='icon'><i className='far fa-map'></i></span><a href={googleMaps.replace(',,', ',')} target='_blank' rel="noreferrer">Lihat Lokasi Gmaps<i className='fa fa-long-arrow-alt-right'></i></a> 
                                    </h4>
                                </HospitalDesc>
                                {/* AIzaSyAMdm-wKXYlci5hYYkV1qgA4Ab7CkBkkwI */}
                            </HospitalDescContainer>
                            <HospitalRoomContainer>
                                <HospitalRoom>
                                    {hospital.bedDetail && hospital.bedDetail.map((bed, index) => 
                                        <article key={index}>
                                            <h2 className='room-title'>{bed.stats.title}</h2>
                                            <h3 className='available-room'><span><i className="far fa-dot-circle"></i>Jumlah Kamar: {bed.stats.bed_available}</span><span><i className="fas fa-check-circle"></i>Kosong: {bed.stats.bed_empty}</span></h3>
                                            <p className='last-update'><span className='hide-small'>Terakhir </span>Update: {bed.time}</p>
                                        </article>
                                    )}
                                </HospitalRoom>
                            </HospitalRoomContainer>
                        </div>
                    </>
                }
            </div>
            <Navigation />
        </>
    )
}

export default HospitalDetail;
