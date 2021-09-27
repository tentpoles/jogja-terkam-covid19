import React from 'react';

import styled from '@emotion/styled';

const HomeInformationContainer = styled.section`
    width: 100%;
    padding: 0 24px;
    margin: 92px 0;
    position: relative;
    .hide-small {
        @media (max-width: 520px) {
            display: none;
        }
    }
    .hide-large {
        @media (min-width: 521px) {
            display: none;
        }
    }
`;

const Information = styled.div`
    max-width: 720px;
    margin: 0 auto;
    color: var(--white-color);
    letter-spacing: 0.35mm;
    .heading {
        display: flex;
        align-items: center;
        h2 {
            font-size: 16px;
            font-weight: var(--font-bold);
            line-height: 6mm;
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
    .text-information {
        margin-top: 24px;
        line-height: 6mm;
        font-size: 14px;
        font-weight: var(--font-medium);
    }
    .dark-overlay {
        width: 100%;
        height: 72px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        background: linear-gradient(
            to top,
            rgba(18, 22, 27, 0.9) 0%,
            rgba(18, 22, 27, 0) 100%
        );
    }
    &.minimize  {
        height: 174px;
        overflow: hidden;
        @media (min-width: 521px) {
            height: 152px;
        }
    }
    &.maximize  {
        height: auto;
    }
`;

const BtnLoadMore = styled.div`
    display: inline-block;
    text-transform: uppercase;
    padding: 10px 16px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 6px;
    font-size: 12px;
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
    color: var(--white-color);
    font-weight: var(--font-bold);
    cursor: pointer;
    letter-spacing: 0.35mm;
    transition: all .25s ease-in-out;
    &:hover {
        background: #4187f6;
        border-color: #4187f6;
    }
`;

const HomeInformation = () => {

    const readMore = () => {
        const informationContainer = document.querySelector('#information-container');
        const darkOverlay = document.querySelector('#dark-overlay');
        const btnLoadMore = document.querySelector('#btn-load-more');
        if(informationContainer.classList.contains('minimize')) {
            informationContainer.classList.remove('minimize');
            informationContainer.classList.add('maximize');
            darkOverlay.remove();
            btnLoadMore.remove();
        }
    }

    return (
        <>
            <HomeInformationContainer className='animate__animated animate__fadeInUp'>
                <Information className='minimize' id='information-container'>
                    <div className='heading'>
                        <span className="line-through"></span>
                        <h2>Jangan Lengah, <span className='hide-large'><br /></span>Pandemi Belum Usai!</h2>
                    </div>
                    <p className='text-information'>Hampir 2 tahun belakangan ini kehidupan di dunia berdampingan dengan Pandemi Covid-19,  Melansir data Satgas Covid-19 pada laman covid19.go.id, zona merah corona di Indonesia per tanggal 19 September 2021 sudah mencapai nol. Meski akhir-akhir ini terlihat mulai mereda, jangan lengah dan menganggap semuanya sudah kembali normal, pandemi belum usai! Banyak negara termasuk Indonesia telah bersepakat untuk menyiapkan langkah-langkah agar bisa hidup berdampingan dengan virus corona, transisi dan adaptasi sudah semestinya dipersiapkan dengan tetap mengedepankan keselamatan jiwa.<br /><br />Upaya preventif yang dilakukan pemerintah adalah dengan melakukan pengawasan ketat di jalur antar wilayah tingkat daerah hingga provinsi meliputi stasiun, bandara, pelabuhan dan pos lintas perbatasan. Kemenko Luhut mengklaim bahwa selama diberlakukan  Pemberlakuan Pembatasan Kegiatan Masyarakat (PPKM) penanganan Covid-19 sangat-sangat terkendali serta pelaksanaan penanganan Covid-19 baik-baik saja.<br /><br />Sampai saat ini belum ada solusi terbaik selain disiplin menjalankan protokol kesehatan karena PPKM akan terus diperpanjang seminggu sekali! Saatnya melakukan penanganan mandiri, kondisi seperti ini akan berlangsung sampai Pandemi Covid-19 betul-betul terkendali oleh Pemerintah Indonesia.</p>
                    <span className='dark-overlay' id='dark-overlay'></span>
                </Information>
                <BtnLoadMore onClick={(() => {readMore()})} id='btn-load-more' className='animate__animated animate__fadeIn animate__delay-1s'><span className='hide-small'>Baca </span>Selengkapnya</BtnLoadMore>
            </HomeInformationContainer>
        </>
    )
}

export default HomeInformation;
