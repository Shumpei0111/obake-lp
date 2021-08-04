import { useEffect, useState } from "react";
import { MenuList } from "./index";
import { catchCopy, siteTitle } from "../assets/js/contentList";

import Logo from '../assets/img/logo_tate.svg';

import '../assets/scss/_fitstview.scss';

const FirstView = () => {
    const [loaded, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
    }, [] )

    return(
        <div id="firstView">
            <h1 className="top__siteTitle">
                <img src={Logo} alt={siteTitle.kanji} className={`top__logo ${loaded ? "isLoaded" : "" }` } />
            </h1>
            <h2 className="top__catchCopy">{catchCopy}</h2>
            <MenuList type="top" />
        </div>
    )
}

export default FirstView;