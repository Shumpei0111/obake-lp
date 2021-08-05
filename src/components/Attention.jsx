import { attentions } from '../assets/js/contentList';

import '../assets/scss/_attention.scss';

const Attention = () => {
    const list = attentions.slice().reverse();

    return (
        <div id="attention" className="contents">
            <h2>注意事項</h2>
            <ul className="attentions">
                {
                    list.map( item => {
                       return <li className="attentions__item" key={item}>{item}</li>
                    } )
                }
            </ul>
        </div>
    )
}

export default Attention;