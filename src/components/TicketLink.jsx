import TicketImg from "../assets/img/ticket_hand_pc.svg";
import '../assets/scss/_ticketlink.scss';

const TicketLink = props => {
    const inViewClass  = (
        () => {
            if( props.inView ) {
                return '';
            } else {
                return 'onDisplay'
            }
        }
    )();

    return (
        <div id="ticketLink">
            <img className={`ticket__disp ${inViewClass}`} src={TicketImg} alt="ticket link" />
        </div>
    )
}

export default TicketLink;