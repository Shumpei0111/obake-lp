import { useState, useEffect } from "react";
import TicketImg from "../assets/img/ticket_hand_pc.svg";

import '../assets/scss/_ticketlink.scss';

const TicketLink = () => {
    const [ onDisp, setOnDisp ] = useState( false );

    useEffect( () => {
        // Mutation Observer
        setTimeout( () => {
            const $ = document.getElementById( "firstView" );

            function intersectCallback(entry) {
                if(!entry[0].isIntersecting) {
                    setActiveClass();
                
                } else {
                    disableActiveClass();
                }
            }

            function setActiveClass() {
                setOnDisp(true);
            }

            function disableActiveClass() {
                setOnDisp(false);
            }

            const obsOptions = {
                root: null,
                rootMargin: "-50% 0px",
                threshold: 0
            };
            
            const observer = new IntersectionObserver( intersectCallback, obsOptions );

            observer.observe( $ );
        }, 100 )
    } )

    return (
        <div id="ticketLink">
            <img className={`ticket__disp ${onDisp ? "onDisplay" : ""}`} src={TicketImg} alt="ticket link" />
        </div>
    )
}

export default TicketLink;