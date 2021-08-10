import { useState, useEffect } from "react";
import TicketImg from "../assets/img/ticket_hand_pc.svg";

import '../assets/scss/_ticketlink.scss';

const TicketLink = () => {
    const [ onDisp, setOnDisp ] = useState( false );

    // useEffect(() => {

    //     setTimeout( () => {
    //         setOnDisp( true );
    //     }, 300 );
    // }, [])

    useEffect( () => {
        // Mutation Observer
        setTimeout( () => {
            const $ = document.getElementById( "firstView" );

            function intersectCallback(entry) {
                console.log("en1", entry);
                console.log("en2",entry[0].isIntersecting);
                if(!entry[0].isIntersecting) {
                    setActiveClass();
                
                } else {
                    disableActiveClass();
                }
            }

            function setActiveClass() {
                console.log("onDisp",onDisp);
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
        }, 200 )
    } )

    return (
        <div id="ticketLink">
            <img className={`ticket__disp ${onDisp ? "onDisplay" : ""}`} src={TicketImg} alt="ticket link" />
        </div>
    )
}

export default TicketLink;