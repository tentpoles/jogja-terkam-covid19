import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import HomeIcon from '../assets/img/home-icon.svg';


const NavContainer = styled.nav`
    position: fixed;
    width: 100%;
    padding: 0 24px;
    z-index: 999;
    bottom: 24px;
    overflow: hidden;
    pointer-events: none;
`;

const Nav = styled.div`
    background: var(--subnav-bg-color);
    max-width: 192px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 0 0;
    border-radius: 999px;
    pointer-events: all;
    a {
        font-size: 12px;
        letter-spacing: 0.25mm;
        color: var(--white-color);
        &.home-btn {
            display: flex;
            align-items: center;
            padding: 14px 32px;
            background: #28323e;
            border-radius: 999px;
            transition: all .25s ease-in-out;
            &:hover {
                background: #303c49;
            }
        }
    }
    .hamburger-menu {
        width: 26px;
        height: 26px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .25s ease-in-out;
        cursor: pointer;
        #hamburger-menu {
            color: var(--white-color);
            font-size: 16px;
        }
        .fa-times {
            font-size: 18px !important;
        }
        &:hover {
            background: #28323e;
        }
    }
    .home-icon {
        height: 14px;
        margin: -2px 10px 0 0;
    }
`;

const ModalContainer = styled.section`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: var(--modal-bg-color);
    z-index: 99;
`;

const Modal = styled.div`
    max-width: 420px;
    width: 100%;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 92px;
    padding: 0 24px;
    @media (min-width: 521px) {
        max-width: 460px;
    }
`;

const ModalMenu = styled.div`
    width: 100%;
    background: var(--subnav-bg-color);
    padding: 18px 24px;
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    a {
        transition: all .25s ease-in-out;
        margin: 6px 12px 6px 0;
        font-size: 12px;
        padding: 6px 12px;
        border-radius: 6px;
        letter-spacing: 0.25mm;
        color: var(--white-color);
        border: 1px solid rgba(255, 255, 255, 0.7);
        &:hover {
            border: 1px solid #4187f6 !important;
            background: #4187f6;
            color: var(--white-color) !important;
        }
        @media (min-width: 521px) {
            font-size: 14px;
            padding: 8px 14px;
        }
    }
`;

const Navigation = () => {

    const openModal = () => {
        const modalMenu = document.querySelector('#modal-menu');
        const hamburgerMenu = document.querySelector('#hamburger-menu');
        if(modalMenu.classList.contains('display-none')) {
            modalMenu.classList.remove('display-none');
            modalMenu.classList.add('display-block');
        }
        else {
            modalMenu.classList.remove('display-block');
            modalMenu.classList.add('display-none');
        }
        if(hamburgerMenu.classList.contains('fa-bars')) {
            hamburgerMenu.classList.remove('fa-bars');
            hamburgerMenu.classList.add('fa-times');
        }
        else {
            hamburgerMenu.classList.remove('fa-times');
            hamburgerMenu.classList.add('fa-bars');
        }
    }

    const closeModal = () => {
        const modalMenu = document.querySelector('#modal-menu');
        const hamburgerMenu = document.querySelector('#hamburger-menu');
        if(modalMenu.classList.contains('display-block')) {
            modalMenu.classList.remove('display-block');
            modalMenu.classList.add('display-none');
        }
        if(hamburgerMenu.classList.contains('fa-bars')) {
            hamburgerMenu.classList.remove('fa-bars');
            hamburgerMenu.classList.add('fa-times');
        }
        else {
            hamburgerMenu.classList.remove('fa-times');
            hamburgerMenu.classList.add('fa-bars');
        }
    }

    return (
        <>
            <NavContainer>
                <Nav>
                    <Link to='/' className='home-btn'><img className='home-icon' src={HomeIcon} alt="" />Home</Link>
                    <span className='hamburger-menu' onClick={() => openModal()}><i className='fas fa-bars' id='hamburger-menu'></i></span>
                </Nav>
            </NavContainer>
            <ModalContainer id='modal-menu' className='display-none animate__animated animate__fadeIn animate__fast'>
                <Modal>
                    <ModalMenu className='animate__animated animate__fadeInUp'>
                        <NavLink to='/kulon-progo' className="mobile-navlink" onClick={() => closeModal()}>Kulon Progo</NavLink>
                        <NavLink to='/bantul' className="mobile-navlink" onClick={() => closeModal()}>Bantul</NavLink>
                        <NavLink to='/gunung-kidul' className="mobile-navlink" onClick={() => closeModal()}>Gunung Kidul</NavLink>
                        <NavLink to='/sleman' className="mobile-navlink" onClick={() => closeModal()}>Sleman</NavLink>
                        <NavLink to='/kota-yogyakarta' className="mobile-navlink" onClick={() => closeModal()}>Kota Yogyakarta</NavLink>
                    </ModalMenu>
                </Modal>
            </ModalContainer>
        </>
    )
}

export default Navigation;
