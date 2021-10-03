import React from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const SitemapContainer = styled.section`
    width: 100%;
    padding: 0 12px;
    background: #0e1114;
`;

const Sitemap = styled.div`
    max-width: 744px;
    padding: 72px 0;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .flex-item {
        padding: 18px 12px;
        display: flex;
        flex: 0 0 33.3%;
        flex-direction: column;
        white-space: nowrap;
        .footer-title, .footer-item {
            font-size: 14px;
            color: var(--white-color);
            letter-spacing: 0.35mm;
            font-weight: var(--font-bold);
        }
        .footer-item {
            font-size: 12px;
            font-weight: var(--font-medium);
            a {
                color: var(--white-color);
                transition: all 0.25s ease-in-out;
                &:hover {
                    color: #4187f6;
                    text-decoration: underline;
                }
            }
        }
        & > * + * {
            margin-top: 12px;
        }
        @media (max-width: 650px) {
            flex: 0 0 100%;
        }
    }
`;

const FooterContainer = styled.footer`
    width: 100%;
    padding: 0 24px;
    background: #0e1114;
`;

const LineBreak = styled.div`
    width: 100%;
    height: 2px;
    background: #12161b;
`;

const Footer = styled.div`
    max-width: 724px;
    padding: 32px 0;
    margin: 0 auto;
    color: var(--white-color);
    font-size: 12px;
    letter-spacing: 0.35mm;
    font-weight: var(--font-medium);
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        color: var(--white-color);
        transition: all 0.25s ease-in-out;
        &:hover {
            color: #4187f6;
            text-decoration: underline;
        }
    }
    .right {
        & > * {
            margin-left: 6px;
        }
    }
`;

const HomeFooter = () => {
    return (
        <>
            <SitemapContainer>
                <Sitemap>
                    <div className='flex-item'>
                        <h3 className='footer-title'>Resources</h3>
                        <h3 className='footer-item'>
                            <a href="https://rs-bed-covid-api.vercel.app/" target='_blank' rel="noreferrer">RS Bed Covid API</a>
                        </h3>
                        <h3 className='footer-item'>
                            <a href="https://indonesia-covid-19.mathdro.id/api/provinsi" target='_blank' rel="noreferrer">Data Covid-19</a>
                        </h3>
                        <h3 className='footer-item'>
                            <a href="https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more" target='_blank' rel="noreferrer">Data Pandemi Provinsi</a>
                        </h3>
                        <h3 className='footer-item'>
                            <a href="https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA" target='_blank' rel="noreferrer">Indonesia Lokal API</a>
                        </h3>
                        <h3 className='footer-item'>
                            <a href="https://github.com/tentpoles/jogja-terkam-covid19/tree/master" target='_blank' rel="noreferrer">GitHub Project Repository</a>
                        </h3>
                    </div>
                    <div className='flex-item'>
                        <h3 className='footer-title'>Referensi</h3>
                        <h3 className='footer-item'>
                            <a href="https://yankes.kemkes.go.id/" target='_blank' rel="noreferrer">Yankes Kemkes</a>
                        </h3>
                        <h3 className='footer-item'>
                            <a href="https://github.com/hendraaagil/bed-covid-rs-indo" target='_blank' rel="noreferrer">Bed Covid RS Indo</a>
                        </h3>
                        <h3 className='footer-item'>
                            <a href="https://github.com/agallio/ina-covid-bed" target='_blank' rel="noreferrer">Bed Ina Covid</a>
                        </h3>
                        <h3 className='footer-item'>
                            <a href="https://github.com/mathdroid/covid-19-api" target='_blank' rel="noreferrer">Covid Global Data</a>
                        </h3>
                        <h3 className='footer-item'>
                            <a href="https://github.com/ajiyudhanto/availability-id-hospital-bed" target='_blank' rel="noreferrer">Availability Hospital Bed</a>
                        </h3>
                    </div>
                    <div className='flex-item'>
                        <h3 className='footer-title'>Sitemap</h3>
                        <h3 className='footer-item'>
                            <Link to='/kulon-progo'>Kulon Progo</Link>
                        </h3>
                        <h3 className='footer-item'>
                            <Link to='/bantul'>Bantul</Link>
                        </h3>
                        <h3 className='footer-item'>
                            <Link to='/gunung-kidul'>Gunung Kidul</Link>
                        </h3>
                        <h3 className='footer-item'>
                            <Link to='/sleman'>Sleman</Link>
                        </h3>
                        <h3 className='footer-item'>
                            <Link to='/kota-yogyakarta'>Kota Yogyakarta</Link>
                        </h3>
                    </div>
                </Sitemap>
            </SitemapContainer>
            <FooterContainer>
                <LineBreak></LineBreak>
                <Footer>
                    <span className='left'>
                        Developed by <a href="https://www.linkedin.com/in/b-alkautsar/" target='_blank' rel="noreferrer">B. Alkautsar</a>
                    </span>
                    <span className='right'>
                        <a href="https://www.instagram.com/tentpolesman/" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/tentpoles" target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://github.com/tentpoles?tab=repositories" target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a>
                    </span>
                </Footer>
            </FooterContainer>
        </>
    )
}

export default HomeFooter;
