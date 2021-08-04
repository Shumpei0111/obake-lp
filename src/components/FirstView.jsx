import { MenuList } from "./index";
import { catchCopy, siteTitle } from "../assets/js/contentList";
import '../assets/scss/_fitstview.scss';

const FirstView = () => {
    return(
        <div id="firstView">
            <h1 className="top__siteTitle">{siteTitle.kanji}</h1>
            <h2 className="top__catchCopy">{catchCopy}</h2>
            <MenuList type="top" />
        </div>
    )
}

export default FirstView;