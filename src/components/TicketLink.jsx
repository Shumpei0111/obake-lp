import { useState, useEffect } from "react";
import TicketImg from "../assets/img/ticket_hand_pc.svg";

import '../assets/scss/_ticketlink.scss';

const TicketLink = () => {
    const [ onDisp, setOnDisp ] = useState( false );

    useEffect( () => {
        // Mutation Observer
        setTimeout( () => {
            const $firstView = document.getElementById( "firstView" );
            // const $footer    = document.getElementById( "footer" );

            function intersectCallback(entry) {

                for( let i = 0, n = entry.length; i < n; i++ ) {
                    if( !entry[i].isIntersecting ) {
                        setActiveClass();
                
                    } else {
                        disableActiveClass();
                        break;
                    }

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
                rootMargin: "0px 0px",
                threshold: 0
            };
            
            const observer = new IntersectionObserver( intersectCallback, obsOptions );

            observer.observe( $firstView );
            // observer.observe( $footer );
        }, 100 )
    } )

    return (
        <div id="ticketLink">
            <img className={`ticket__disp ${onDisp ? "onDisplay" : ""}`} src={TicketImg} alt="ticket link" />
        </div>
    )
}

export default TicketLink;