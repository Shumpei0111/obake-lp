import { useState, useEffect } from 'react';

import '../assets/scss/_asobo.scss';

const Asobo = () => {
    const [isLoaded, setIsLoaded ] = useState( false );

    function disableScroll(event) {
        event.preventDefault();
    }

    useEffect( () => {
        document.addEventListener('touchmove', disableScroll, { passive: false });
        document.addEventListener('mousewheel', disableScroll, { passive: false });


        setTimeout( () => {
            document.removeEventListener('touchmove', disableScroll, { passive: false });
            document.removeEventListener('mousewheel', disableScroll, { passive: false });
            setIsLoaded( true );
        }, 2000 );

    }, [] );

    return(
        <div id="asobo" className={`${isLoaded? "asobo__isLoaded" : ""}`}>
            <p className="asobo__str">たすけて</p>
            <span className="asobo__img ah">あ</span>
            <span className="asobo__img so">そ</span>
            <span className="asobo__img bo">ぼ</span>
        </div>
    )
}

export default Asobo;