import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.less';
import Navigation from 'swiper/components/navigation';
import Pagination from 'swiper/components/pagination';
import 'swiper/components/navigation/navigation.less';

SwiperCore.use([Pagination,Navigation]);

const RegionListContainer = styled.section`
    width: 100%;
    margin-top: 92px;
    padding: 0 24px;
`;

const RegionList = styled.div`
    max-width: 720px;
    margin: 0 auto;
    .region-heading {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        h2 {
            font-size: 16px;
            color: var(--white-color);
            letter-spacing: 0.35mm;
            font-weight: var(--font-bold);
        }
        .line-through {
            width: 40px;
            background: rgba(65, 135, 246, 0.2);
            margin-right: 12px;
            height: 4px;
            @media (max-width: 520px) {
                display: none;
            }
        }
    }
    .swiper-slide {
        width: auto !important;
        .swippie-container {
            border-radius: 12px;
            width: 240px;
            background: var(--subnav-bg-color);
            transition: all .25s ease-in-out;
            padding: 56px 24px 24px 24px;
            letter-spacing: 0.35mm;
            .region-name {
                color: var(--white-color);
                font-size: 18px;
                font-weight: var(--font-bold);
            }
            .hover-effect {
                margin-top: 6px;
                display: flex;
                align-items: center;
                .hover-line {
                    top: 1px;
                    position: relative;
                    opacity: 0;
                    transform: translateX(-6px);
                    transition: all .25s ease-in-out;
                    color: #4187f6;
                }
                .region-desc {
                    text-transform: uppercase;
                    font-size: 12px;
                    color: var(--white-color);
                    font-weight: var(--font-medium);
                }
            }
            &:hover {
                background: #28323e;
                & > .hover-effect > .hover-line {
                    opacity: 1;
                    transform: translateX(6px);
                }
            }
            @media (min-width: 521px) {
                width: 260px;
            }
        }
    }
    .swiper-button-prev, .swiper-button-next {
        color: #4187f6 !important;
        // @media (max-width: 520px) {
        //     display: none !important;
        // }
    }
    .swiper-button-next {
        right: 12px !important;
        transition: all 0.25s ease-in-out;
        opacity: 0;
        transform: scale(0);
    }
    .swiper-button-prev {
        left: 12px !important;
        transition: all 0.25s ease-in-out;
        opacity: 0;
        transform: scale(0);
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        opacity: 0;
        transition: all 0.25s ease-in-out;
        transform: scale(0);
        bottom: 12px !important;
        top: auto !important;
    }
    .swiper-pagination-bullet-active {
        background: #4187f6 !important;
    }
    .swiper-container {
        &:hover {
            .swiper-button-prev, .swiper-button-next {
                opacity: 1;
                transform: scale(0.8);
            }
            .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
                opacity: 1;
                transform: scale(1);
            }
        }
        & + * {
            margin-top: 12px;
        }
    }
`;

const HomeRegionList = () => {
    return (
        <>
            <RegionListContainer>
                <RegionList className='animate__animated animate__fadeInUp'>
                    <div className='region-heading'>
                        <span className="line-through"></span>
                        <h2>Ketersediaan Rumah Sakit</h2>
                    </div>
                    <Swiper
                    navigation={true}
                    // pagination={{"clickable": true}}
                    grabCursor={true}
                    slidesPerView={'auto'}
                    spaceBetween={12}
                    loop={true}
                    className="mySwiper">
                        <SwiperSlide>
                            <Link to='/kulon-progo/covid'>
                                <div className='swippie-container'>
                                    <h3 className="region-name">Kulon Progo</h3>
                                    <div className='hover-effect'>
                                        <h4 className="region-desc">Pasien Covid</h4>
                                        <div className='hover-line'><i className="fas fa-long-arrow-alt-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/bantul/covid'>
                                <div className='swippie-container'>
                                    <h3 className="region-name">Bantul</h3>
                                    <div className='hover-effect'>
                                        <h4 className="region-desc">Pasien Covid</h4>
                                        <div className='hover-line'><i className="fas fa-long-arrow-alt-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/gunung-kidul/covid'>
                                <div className='swippie-container'>
                                    <h3 className="region-name">Gunung Kidul</h3>
                                    <div className='hover-effect'>
                                        <h4 className="region-desc">Pasien Covid</h4>
                                        <div className='hover-line'><i className="fas fa-long-arrow-alt-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/sleman/covid'>
                                <div className='swippie-container'>
                                    <h3 className="region-name">Sleman</h3>
                                    <div className='hover-effect'>
                                        <h4 className="region-desc">Pasien Covid</h4>
                                        <div className='hover-line'><i className="fas fa-long-arrow-alt-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/kota-yogyakarta/covid'>
                                <div className='swippie-container'>
                                    <h3 className="region-name">Kota Yogyakarta</h3>
                                    <div className='hover-effect'>
                                        <h4 className="region-desc">Pasien Covid</h4>
                                        <div className='hover-line'><i className="fas fa-long-arrow-alt-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                    navigation={true}
                    // pagination={{"clickable": true}}
                    grabCursor={true}
                    slidesPerView={'auto'}
                    spaceBetween={12}
                    loop={true}
                    className="mySwiper">
                        <SwiperSlide>
                            <Link to='/kulon-progo/non-covid'>
                                <div className='swippie-container'>
                                    <h3 className="region-name">Kulon Progo</h3>
                                    <div className='hover-effect'>
                                        <h4 className="region-desc">Pasien Non-Covid</h4>
                                        <div className='hover-line'><i className="fas fa-long-arrow-alt-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/bantul/non-covid'>
                                <div className='swippie-container'>
                                    <h3 className="region-name">Bantul</h3>
                                    <div className='hover-effect'>
                                        <h4 className="region-desc">Pasien Non-Covid</h4>
                                        <div className='hover-line'><i className="fas fa-long-arrow-alt-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/gunung-kidul/non-covid'>
                                <div className='swippie-container'>
                                    <h3 className="region-name">Gunung Kidul</h3>
                                    <div className='hover-effect'>
                                        <h4 className="region-desc">Pasien Non-Covid</h4>
                                        <div className='hover-line'><i className="fas fa-long-arrow-alt-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/sleman/non-covid'>
                                <div className='swippie-container'>
                                    <h3 className="region-name">Sleman</h3>
                                    <div className='hover-effect'>
                                        <h4 className="region-desc">Pasien Non-Covid</h4>
                                        <div className='hover-line'><i className="fas fa-long-arrow-alt-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/kota-yogyakarta/non-covid'>
                                <div className='swippie-container'>
                                    <h3 className="region-name">Kota Yogyakarta</h3>
                                    <div className='hover-effect'>
                                        <h4 className="region-desc">Pasien Non-Covid</h4>
                                        <div className='hover-line'><i className="fas fa-long-arrow-alt-right"></i></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </RegionList>
            </RegionListContainer>
        </>
    )
}

export default HomeRegionList;
