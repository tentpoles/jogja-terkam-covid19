import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import styled from '@emotion/styled';
import $ from 'jquery';

const ChartContainer = styled.section`
    width: 100%;
    padding: 0 24px;
    margin-top: 92px;
    position: relative;
    min-height: 400px;
`;

const ChartCardContainer = styled.div`
    max-width: 720px;
    margin: 0 auto;
    border-radius: 12px;
    background: var(--subnav-bg-color);
    .chart-title {
        padding: 42px 24px 0 24px;
        width: 100%;
        .hide-medium {
            @media (max-width: 440px) {
                display: none;
            }
        }
        .hide-large {
            @media (min-width: 441px) {
                display: none;
            }
        }
        h2, p {
            line-height: 7mm;
            color: var(--white-color);
            letter-spacing: 0.35mm;
        }
        h2 {
            text-align: center;
            font-size: 16px;
        }
        .last-update {
            margin: 16px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .blue-circle {
                width: 9px;
                height: 9px;
                border-radius: 50%;
                margin-right: 10px;
                background: rgb(65, 135, 246);
            }
            p {
                font-size: 12px;
                font-weight: var(--font-medium);
            }
            @media (max-width: 500px) {
                margin: 8px 0 14px 0;
            }
        }
    }
`;

const ChartCard = styled.div`
    width: 100%;
    overflow-x: auto;
    position: relative;
`;

const Chart = styled.div`
    min-width: 666px;
    width: 100%;
    padding: 0 24px 42px 24px;
`;

const ChartCaseContainer = styled.div`
    max-width: 600px;
    margin: 92px auto 0px auto;
    position: relative;
`;

const ChartCase = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    .icon-container {
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        position: relative;
        background: var(--primary-bg-color);
        .circle-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            width: 14px;
            height: 14px;
            border: 2px solid #4187f6;
        }
    }
    .chartcase-card {
        margin-left: 42px;
        padding: 24px;
        display: block;
        flex: 0 1 100%;
        background: var(--subnav-bg-color);
        border-radius: 12px;
        color: var(--white-color);
        letter-spacing: 0.4mm;
        white-space: nowrap;
        overflow-x: auto;
        .chartcase-title {
            margin-top: 6px;
            font-size: 14px;
            font-weight: var(--font-medium);
        }
        .chartcase-value {
            font-size: 22px;
            font-weight: var(--font-bold);
            @media (max-width: 340px) {
                font-size: 22px;
            }
        }
        @media (max-width: 520px) {
            margin-left: 24px;
        }
    }
    & + * {
        margin-top: 24px;
    }
`;

const VerticalLine = styled.div`
    width: 3px;
    height: 100%;
    left: 13px;
    background: rgba(65, 135, 246, 0.2);
    position: absolute;
`;

const HomeChart = () => {
    
    useEffect(() => {
        fetchData()
        .then((request) => {
            request.data.forEach(data => {
                if(data.provinsi === "DAERAH ISTIMEWA YOGYAKARTA") {
                    for (const [key, value] of Object.entries(data.kelompok_umur)) {
                        setChartData(oldData => [...oldData, value]);
                        setLabelName(oldLabelName => [...oldLabelName, key + ' Tahun']);
                    }
                    setLastUpdate('  ' + data.last_date + ' (Terakhir Update) ');
                    setKasus(prevKasus => ({
                        ...prevKasus,
                        jumlah: data.kasus,
                        dirawat: data.dirawat,
                        sembuh: data.sembuh,
                        meninggal: data.meninggal,
                        lakilaki_count: data.jenis_kelamin['laki-laki'],
                        perempuan_count: data.jenis_kelamin.perempuan,
                    }));
                } 
            })
            setTimeout(() => {
                setLoading(false);
                $('.chartcase-value').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 10000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }, 2000);
        })
        .catch((error) => console.error(error));
    }, []);

    const [kasus, setKasus] = useState({
        jumlah: null,
        dirawat: null,
        sembuh: null,
        meninggal: null,
        lakilaki_count: null,
        perempuan_count: null,
    });
    const [lastUpdate, setLastUpdate] = useState('');
    const [chartData, setChartData] = useState([]);
    const [labelName, setLabelName] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchData = async () => {
        const request = await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more');           
        return request;
    }

    const data = {
        labels: labelName,
        datasets: [
            {
                label: lastUpdate,
                data: chartData,
                backgroundColor: 'rgb(65, 135, 246)',
                borderColor: 'rgba(65, 135, 246, 0.2)',
                fill: false,
            },
        ],
    };
        
    const options = {
        responsive: true,
        scales: {
          y: {
            title: {
              display: true,
              text: 'Jumlah Kasus',
              padding: {
                bottom: 20
              },
              color: '#fff',
              font: {
                  size: 12,
                  family: "'Inter', 'sans-serif'",
                  color: '#fff',
              },
            },
          }
        },
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              font: {
                  size: 1,
                  family: "'Inter', 'sans-serif'",
                  color: '#181e25',
              },
              boxHeight: 0,
              boxWidth: 0,
              position: 'left',
              color: '#181e25',
            },
          }
        }
    };

    return (
        <>
            <ChartContainer>
            {
                loading ? <div className="ripple-loading"><div></div><div></div></div>
            
                :

                <>
                    <ChartCardContainer>
                        <div className='chart-title'>
                            <h2>Data Covid-19<span className='hide-medium'> Real-Time Update</span><br />Provinsi <span className='hide-medium'>Daerah Istimewa </span>Yogyakarta</h2>
                            <div className='last-update'>
                                <div className='blue-circle'></div>
                                <p>{lastUpdate}</p>
                            </div>
                        </div>
                        <ChartCard className='animate__animated animate__fadeIn'>
                            <Chart>
                                <Line data={data} options={options} id='myChart' />
                            </Chart>
                        </ChartCard>
                    </ChartCardContainer>
                    <ChartCaseContainer>
                        <VerticalLine className='animate__animated animate__fadeIn animate__delay-1s'></VerticalLine>
                        <ChartCase className='animate__animated animate__fadeInUp'>
                            <div className='icon-container'>
                                <div className='circle-icon'></div>
                            </div>
                            <div className='chartcase-card'>
                                <h4 className='chartcase-value'>{kasus.jumlah}</h4>
                                <h3 className='chartcase-title'>Kasus Terkonfirmasi</h3>
                            </div>
                        </ChartCase>
                        <ChartCase className='animate__animated  animate__fadeInUp'>
                            <div className='icon-container'>
                                <div className='circle-icon'></div>
                            </div>
                            <div className='chartcase-card'>
                                <h4 className='chartcase-value'>{kasus.lakilaki_count}</h4>
                                <h3 className='chartcase-title'>Gender Laki-laki</h3>
                            </div>
                        </ChartCase>
                        <ChartCase className='animate__animated  animate__fadeInUp'>
                            <div className='icon-container'>
                                <div className='circle-icon'></div>
                            </div>
                            <div className='chartcase-card'>
                                <h4 className='chartcase-value'>{kasus.perempuan_count}</h4>
                                <h3 className='chartcase-title'>Gender Perempuan</h3>
                            </div>
                        </ChartCase>
                        <ChartCase className='animate__animated  animate__fadeInUp'>
                            <div className='icon-container'>
                                <div className='circle-icon'></div>
                            </div>
                            <div className='chartcase-card'>
                                <h4 className='chartcase-value'>{kasus.dirawat}</h4>
                                <h3 className='chartcase-title'>Sedang Dirawat</h3>
                            </div>
                        </ChartCase>
                        <ChartCase className='animate__animated  animate__fadeInUp'>
                            <div className='icon-container'>
                                <div className='circle-icon'></div>
                            </div>
                            <div className='chartcase-card'>
                                <h4 className='chartcase-value'>{kasus.sembuh}</h4>
                                <h3 className='chartcase-title'>Berhasil Sembuh</h3>
                            </div>
                        </ChartCase>
                        <ChartCase className='animate__animated  animate__fadeInUp'>
                            <div className='icon-container'>
                                <div className='circle-icon'></div>
                            </div>
                            <div className='chartcase-card'>
                                <h4 className='chartcase-value'>{kasus.meninggal}</h4>
                                <h3 className='chartcase-title'>Meninggal Dunia</h3>
                            </div>
                        </ChartCase>
                    </ChartCaseContainer>
                </>
            }
            </ChartContainer>
        </>
    )
}

export default HomeChart;
