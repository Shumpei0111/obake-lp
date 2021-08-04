import { useEffect } from 'react';

import '../assets/scss/_footer.scss';
import toTopImg from '../assets/img/footer-center.svg';
import yokoLogo from '../assets/img/logo_yoko.svg';

import { stuff, copyright } from '../assets/js/contentList';
import { MenuList } from '.';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
// import { ScrollTrigger } from 'gsap/all';

const Footer = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, [])

    const clickToTop = () => {
        gsap.to( window, {
            scrollTo: 0,
            duration: 0.2,
        } )
    };


    return (
        <div id="footer">
            <img src={toTopImg} alt="TOPへ戻る" className="to_top_btn" onClick={clickToTop} />
            <div>
                <img src={yokoLogo} alt="廃墟探索" className="footer__logo" />
                <MenuList type="footer" />
            </div>
            <p className="credit">{stuff}</p>
            <address className="copyright">{copyright}</address>
        </div>
    )
};

export default Footer;