import { useEffect, useState } from "react";
import { MenuList } from "./index";
import { siteTitle } from "../assets/js/contentList";

import Logo from '../assets/img/logo_tate.svg';

import '../assets/scss/_fitstview.scss';

const FirstView = () => {
    const [loaded, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
    }, [] )

    return(
        <div id="firstView">
            <div className="top__bg__wrapper">
                <div className="top__bg"></div>
            </div>
            <h1 className="top__siteTitle">
                <img src={Logo} alt={siteTitle.kanji} className={`top__logo ${loaded ? "isLoaded" : "" }` } />
            </h1>
            <p className={`top__catchCopy ${loaded ? "isLoaded" : "" }` }>日本初！実際の廃校を舞台に<span>謎解き</span> × <span>お化け屋敷</span>の体験型アトラクション、この夏開催！</p>
            <MenuList type="top" />
            <p className="top__intro intro_1">不可解な火事</p>
            <p className="top__intro intro_2">行方不明の7人</p>
            <p className="top__intro intro_3">廃校を探索し事件を解決に導け！</p>
            <p className="top__intro intro_4 top__appeal">日本初ホラーミステリーツアー</p>
        </div>
    )
}

export default FirstView;