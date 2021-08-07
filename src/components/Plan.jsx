import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../assets/scss/_plan.scss';

const Plan = () => {
    const tourPlan = {
        tour: ["青森駅","ミステリーツアー","まかど観光ホテル","野辺地町観光物産ＰＲセンター","青森駅"],
    };

    const days = [
        {
            day: "7月1日",
            week: "木",
            plan: {
                tour: {
                    price: {
                        ad: "45140",
                        ch: "11000"
                    }
                },
                only: {
                    price: {
                        ad: "2000",
                        ch: "1000"
                    }
                }
            }
        },
        {
            day: "7月2日",
            week: "金",
            plan: {
                tour: {
                    price: {
                        ad: "45140",
                        ch: "11000"
                    }
                },
                only: {
                    price: {
                        ad: "2000",
                        ch: "1000"
                    }
                }
            }
        },
        {
            day: "7月3日",
            week: "土",
            plan: {
                tour: {
                    price: {
                        ad: "45140",
                        ch: "11000"
                    }
                },
                only: {
                    price: {
                        ad: "2000",
                        ch: "1000"
                    }
                }
            }
        },
        {
            day: "7月4日",
            week: "日",
            plan: {
                tour: {
                    price: {
                        ad: "45140",
                        ch: "11000"
                    }
                },
                only: {
                    price: {
                        ad: "2000",
                        ch: "1000"
                    }
                }
            }
        },
        {
            day: "7月5日",
            week: "月",
            plan: {
                tour: {
                    price: {
                        ad: "45140",
                        ch: "11000"
                    }
                },
                only: {
                    price: {
                        ad: "2000",
                        ch: "1000"
                    }
                }
            }
        },
        {
            day: "7月6日",
            week: "火",
            plan: {
                tour: {
                    price: {
                        ad: "45140",
                        ch: "11000"
                    }
                },
                only: {
                    price: {
                        ad: "2000",
                        ch: "1000"
                    }
                }
            }
        },
        {
            day: "7月7日",
            week: "水",
            plan: {
                tour: {
                    price: {
                        ad: "45140",
                        ch: "11000"
                    }
                },
                only: {
                    price: {
                        ad: "2000",
                        ch: "1000"
                    }
                }
            }
        },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    }

    return (
        <div id="plan" className="contents">
            <h2>開催日時</h2>
            <div className="plan__wrapper">
                <div className="plan__container">
                    <Slider {...settings} className="plan__plan_box">
                        {days.map( d => {
                            return (
                                <div className="plan_box_item" key={d}>
                                    <div>{d.day}({d.week})</div>
                                </div>
                            )})
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
};

export default Plan;