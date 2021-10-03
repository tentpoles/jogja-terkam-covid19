import React from 'react';

import styled from '@emotion/styled';

const ContributeContainer = styled.section`
    width: 100%;
    padding: 92px 24px 0px 24px;
    background: #0e1114;
`;

const Contribute = styled.div`
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    @media (max-width: 792px) {
        align-items: flex-start;
        flex-direction: column;
    }
`;

const LeftSide = styled.div`
    flex: 0 0 400px;
    letter-spacing: 0.4mm;
    @media (max-width: 792px) {
        flex: 0 0 100%;
    }
    .contribute-header {
        font-size: 18px;
        color: var(--white-color);
        line-height: 7mm;
        max-width: 420px;
        font-weight: var(--font-bold);
    }
    .contribute-subheader {
        font-size: 14px;
        color: var(--white-color);
        line-height: 5.5mm;
        margin-top: 32px;
        font-weight: var(--font-medium);
    }
    .contribute-description {
        margin-top: 2px;
        font-size: 20px;
        color: #4187f6;
        line-height: 7mm;
        font-weight: var(--font-bold);
        margin-bottom: 26px;
    }
    .contribute-cta {
        position: relative;
        .contribute-cta-text {
            font-size: 16px;
            color: var(--white-color);
            line-height: 7mm;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                left: 0;
                bottom: -7px;
                width: 100%;
                height: 2px;
                background: #28323e;
            }
            &::after {
                content: '';
                position: absolute;
                bottom: -7px;
                left: 0;
                transform-origin: left;
                width: 100%;
                transition: all .25s ease-in-out;
                height: 2px;
                transform: scaleX(0);
                background: #4187f6;
            }
        }
        &:hover {
            .contribute-cta-text::after {
                transform: scaleX(1);
            }
        }
        .fa-arrow-right {
            font-size: 13px;
            position: relative;
            left: 6px;
            top: -1px;
            color: var(--white-color);
            animation: arrow-right .7s infinite;
        }
    }
    .hide-small {
        @media (max-width: 380px) {
            display: none;
        }
    }
    .hide-large {
        @media (min-width: 381px) {
            display: none;
        }
    }
    @keyframes arrow-right {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(3px);
        }
        25% {
            transform: translateX(5px);
        }
        75% {
            transform: translateX(3px);
        }
        to {
            transform: translateX(0);
        }
    }
`;

const RightSide = styled.div`
    flex: 0 1 100%;
    max-width: 500px;
    margin-left: 32px;
    .github-repository-card {
        display: block;
        width: 100%;
        padding: 16px 16px 18px 16px;
        color: var(--white-color);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        background: var(--subnav-bg-color);
        transition: all .25s ease-in-out;
        .project-info {
            display: flex;
            .project-img {
                position: relative;
                width: 42px;
                height: 42px;
                border-radius: 50%;
                overflow: hidden;
                flex-shrink: 0;
                img {
                    width: 42px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            .project-name {
                flex: 1 1 100%;
                margin: 3px 0 0 12px;
                font-size: 14px;
                letter-spacing: 0.4mm;
                line-height: 5mm;
                font-weight: var(--font-bold);
                .project-author {
                    color: rgba(255, 255, 255, 0.4);
                    font-weight: var(--font-regular);
                    font-size: 12px;
                }
            }
        }
        .project-description {
            margin-top: 10px;
            font-weight: var(--font-medium);
            font-size: 12px;
            letter-spacing: 0.35mm;
            line-height: 5mm;
        }
        .project-tag {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 6px;
            .tag-list {
                margin: 8px 8px 0 0;
                display: inline-block;
                padding: 2px 8px;
                border: 1px solid rgba(255, 255, 255, 0.25);
                border-radius: 4px;
                font-weight: var(--font-medium);
                font-size: 12px;
                letter-spacing: 0.35mm;
                line-height: 5mm;
                color: var(--white-color);
            }
        }
        &:hover {
            background: #1e242d;
        }
    }
    @media (max-width: 792px) {
        margin-top: 48px;
        margin-left: 0px;
        flex: 0 0 100%;
    }
`;

const LineBreak = styled.div`
    width: 100%;
    margin-top: 92px;
    height: 2px;
    background: #12161b;
`;

const HomeContribute = () => {
    return (
        <>
            <ContributeContainer>
                <Contribute>
                    <LeftSide className="animate__animated animate__fadeInLeft">
                        <h3 className="contribute-header">Ingin berkontribusi dalam project ini sehingga menjadikannya lebih baik?</h3>
                        <h4 className="contribute-subheader">Pull request melalui GitHub<span className="hide-small"> repository</span>.</h4>
                        <p className="contribute-description">100% project for humanity<span className="hide-small"> first</span>.</p>
                        <a href="https://github.com/tentpoles/jogja-terkam-covid19/pulls"  target='_blank' rel="noreferrer" className="contribute-cta">
                            <span className="contribute-cta-text">Mulai berkontribusi <span className="hide-small">project</span></span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </LeftSide>
                    <RightSide className="animate__animated animate__fadeInRight">
                        <a href="https://github.com/tentpoles/jogja-terkam-covid19/tree/master" target='_blank' rel="noreferrer" className="github-repository-card">
                            <div className="project-info">
                                <div className="project-img">
                                    <img src="https://avatars.githubusercontent.com/u/48401918?v=4" alt="" />
                                </div>
                                <h5 className="project-name">jogja-terkam-covid19<br /><span className="project-author">by tentpoles</span></h5>
                            </div>
                            <p className="project-description">An open-source project for humanity, real-time update covid-19 data and hospital availability based on covid and non-covid patients of Special Region of Yogyakarta.</p>
                            <div className="project-tag">
                                <span className="tag-list">react.js</span>
                                <span className="tag-list">emotion.js</span>
                                <span className="tag-list">jquery</span>
                                <span className="tag-list">chart.js</span>
                                <span className="tag-list">swiper.js</span>
                                <span className="tag-list">etc</span>
                            </div>
                        </a>
                    </RightSide>
                </Contribute>
                <LineBreak className="animate__animated animate__fadeInUp"></LineBreak>
            </ContributeContainer>
        </>
    )
}

export default HomeContribute;
