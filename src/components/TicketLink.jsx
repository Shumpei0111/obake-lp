import TicketImg from "../assets/img/ticket_hand_pc.svg";
import { useInView } from 'react-intersection-observer';

import '../assets/scss/_ticketlink.scss';
import { useState, useEffect } from "react";

const TicketLink = () => {
    const [ ref, inView ] = useInView({
        root: document.getElementById( "story" ),
        rootMargin: "-10px",
        threshold: 0,
    });

    // let onDisplay = false;

    const [ onDisplay, setOnDisplay ] = useState( false );

    console.log(16, inView);

    useEffect( () => {
        if( inView ) {
            setOnDisplay( true );
        }
        return;
    }, [inView] )

    return (
        <div id="ticketLink" ref={ref}>
            <img className={`ticket__disp ${onDisplay ? "onDisplay" : ""}`} src={TicketImg} alt="ticket link" />
        </div>
    )
}

export default TicketLink;