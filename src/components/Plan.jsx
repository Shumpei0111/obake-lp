import Slider from 'react-slick';
import React, { useState, useEffect, useRef } from 'react';
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

    const [state, setState] = useState({
        nav1: null,
        nav2: null
      });
    
      const slider1 = useRef();
      const slider2 = useRef();
    
      useEffect(() => {
        setState({
          nav1: slider1.current,
          nav2: slider2.current
        });
      }, []);
    
      const {
        nav1,
        nav2
      } = state;

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

    const settingsSliderNav = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        focusOnSelect: true,
      }

    

    return (
        <div id="plan" className="contents">
            <h2>開催日時</h2>
            <div className="plan__wrapper">
                <div className="plan__container">
                    <React.Fragment>
                        <Slider {...settings} asNavFor={nav2} ref={slider => (slider1.current = slider)} className="plan__plan_box">
                            {days.map( d => {
                                return (
                                    <div className="plan_box_item" key={d}>
                                        <div>{d.day}({d.week})</div>
                                    </div>
                                )})
                            }
                        </Slider>
                        <Slider {...settingsSliderNav} asNavFor={nav1} ref={slider => (slider2.current = slider)}>
                            {days.map( (d,ind) => {
                                return (
                                    <div className="plan_genres" key={d}>
                                        <div>{tourPlan.tour}</div>
                                        <div>{d.plan.tour.price.ad}円{ind}</div>
                                        <div>{d.plan.tour.price.ch}円</div>
                                        <br />
                                        <div>{d.plan.only.price.ad}円</div>
                                        <div>{d.plan.only.price.ch}円</div>
                                    </div>
                                )
                            } )}
                        </Slider>
                    </React.Fragment>
                </div>
            </div>
        </div>
    )
};

export default Plan;