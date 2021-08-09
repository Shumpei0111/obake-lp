import { useState, useEffect } from "react";
import TicketImg from "../assets/img/ticket_hand_pc.svg";

import '../assets/scss/_ticketlink.scss';

const TicketLink = () => {
    const [ onDisp, setOnDisp ] = useState( false );

    useEffect(() => {

        setTimeout( () => {
            setOnDisp( true );
        }, 300 );
    }, [])

    return (
        <div id="ticketLink">
            <img className={`ticket__disp ${onDisp ? "onDisplay" : ""}`} src={TicketImg} alt="ticket link" />
        </div>
    )
}

export default TicketLink;