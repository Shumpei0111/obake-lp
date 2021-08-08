import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../assets/scss/_plan.scss';

import { Map } from './index';

const Plan = () => {
    const tourPlan = {
        tour: ["青森駅","ミステリーツアー","まかど観光ホテル","野辺地町観光物産ＰＲセンター","青森駅"],
        only: "ミステリーツアーのみ体験することができます"
    };

    const TourPlanTour = () => {
        const t = tourPlan.tour.slice();
        return t.join( ' ―― ' );
    } 

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
                        ad: "45141",
                        ch: "11001"
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
                        ad: "45142",
                        ch: "11002"
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
                        ad: "45143",
                        ch: "11003"
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
                        ad: "45144",
                        ch: "11004"
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
                        ad: "45145",
                        ch: "11005"
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
                        ad: "45146",
                        ch: "11006"
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
        focusOnSelect: true,
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

    function comma(num) {
        return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }

    const initTourAd = comma(days[0].plan.tour.price.ad);
    const initTourCh = comma(days[0].plan.tour.price.ch);

    const initOnlyAd = comma(days[0].plan.only.price.ad);
    const initOnlyCh = comma(days[0].plan.only.price.ch);

    // 宿泊コース 大人
    const [tourPriceAd, settourPriceAd] = useState(initTourAd);
    // 宿泊コース 子供
    const [tourPriceCh, settourPriceCh] = useState(initTourCh);

    // 探索コース 大人
    const [onlyPriceAd, setonlyPriceAd] = useState(initOnlyAd);
    // 探索コース 子供
    const [onlyPriceCh, setonlyPriceCh] = useState(initOnlyCh);

    const [changed, setChanged] = useState(false);


    const changeDate = date => {
        if(!date) return;

        // 宿泊コース
        const tour = {...date.tour};
        let tourAd = "?a阿鬼90wefsdf";
        let tourCh = "+ldk廻dlでsぁそそそ";
        setChanged(true);
        settourPriceAd(tourAd);
        settourPriceCh(tourCh);

        // 探索コース
        const only = {...date.only};
        let onlyAd = "klkdjdeiiill99999";
        let onlyCh = "そんsけいf顔貌klJJ";
        setonlyPriceAd(onlyAd);
        setonlyPriceCh(onlyCh);


        setTimeout( () => {
            setChanged(false);

            // 宿泊コース
            tourAd = comma(tour.price.ad);
            tourCh = comma(tour.price.ch);
            settourPriceAd(tourAd);
            settourPriceCh(tourCh);

            // 探索コース
            let onlyAd = comma(only.price.ad);
            let onlyCh = comma(only.price.ch);
            setonlyPriceAd(onlyAd);
            setonlyPriceCh(onlyCh);
        }, 150 )
    }

    useEffect(() => {
        changeDate();
    }, [tourPriceAd, tourPriceCh, onlyPriceAd, onlyPriceCh]);

    const todayDate = "7月1日";

    return (
        <div id="plan" className="contents">
            <h2>開催日時</h2>
            <div className="plan__wrapper">
                <div className="plan__container">
                    <Slider {...settings} className="plan__plan_box">
                        {days.map( (d,ind) => {
                            const today = d.day === todayDate ? true : false;
                            return (
                                <div onClick={()=>changeDate(d.plan)} key={d.day}>
                                    <div  className={`plan_box__item ${today ? "isToday" : ""}`}>
                                        <span className="plan_box__item_day">{d.day}</span><span className="plan_box__item_week">({d.week})</span></div>
                                    </div>
                            )})
                        }
                    </Slider>
                    <div className="plan__card">
                        <div className="tour_detail common">
                            <div className="plan__name">宿泊コース</div>
                            <p className="plan__plan"><TourPlanTour /></p>
                            <p className={`plan__plan_kind_wrapper ${changed ? "changing" : ""}`}><span className="plan__plan_kind ad">大人</span>{tourPriceAd}円</p>
                            <p className={`plan__plan_kind_wrapper ${changed ? "changing" : ""}`}><span className="plan__plan_kind ch">子供<span className="ch_cap">(中学生以上)</span></span>{tourPriceCh}円</p>
                            
                        </div>
                        <div className="only_detail common">
                            <div className="plan__name">探索コース</div>
                            <p className="plan__plan">{tourPlan.only}</p>
                            <p className={`plan__plan_kind_wrapper ${changed ? "changing" : ""}`}><span className="plan__plan_kind ad">大人</span>{onlyPriceAd}円</p>
                            <p className={`plan__plan_kind_wrapper ${changed ? "changing" : ""}`}><span className="plan__plan_kind ch">子供<span className="ch_cap">(中学生以上)</span></span>{onlyPriceCh}円</p>
                        </div>
                    </div>
                </div>
            </div>
            <Map />
        </div>
    )
};

export default Plan;