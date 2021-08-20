import { useEffect, useState } from "react";
import { MenuList, P5Wrapper, sketch, TicketLink } from "./index";
// import { siteTitle } from "../assets/js/contentList";
import { useInView } from 'react-intersection-observer';

import '../assets/scss/_fitstview.scss';

const FirstView = props => {
    const [loaded, setLoad] = useState(false);

    const [ ref, inView ] = useInView({
        root: null,
        rootMargin: "-40%",
        threshold: 0,
    });

    useEffect(() => {
        setLoad(true);
    }, [inView] )

    return(
        <div id="firstView" ref={ref}>
            <div className="top__bg__wrapper">
                <div className="top__bg"></div>
            </div>
            <h1 className="top__siteTitle">
                <div className={`top__logo ${loaded ? "isLoaded" : "" }` }>
                    <P5Wrapper sketch={sketch} />
                </div>
            </h1>
            <p className={`top__catchCopy ${loaded ? "isLoaded" : "" }` }>日本初！実際の廃校を舞台に<span>謎解き</span> × <span>お化け屋敷</span>の<br />体験型アトラクション、この夏開催！</p>
            <MenuList type="top" scrollPacks={props.scrollPacks} inView={inView} />
            <p className="top__intro intro_1">不可解な火事</p>
            <p className="top__intro intro_2">行方不明の7人</p>
            <p className="top__intro intro_3">廃校を探索し事件を解決に導け！</p>
            <p className="top__intro intro_4 top__appeal">日本初ホラーミステリーツアー</p>
            <TicketLink inView={inView}  />
        </div>
    )
}

export default FirstView;