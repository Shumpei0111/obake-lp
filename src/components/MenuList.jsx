import { menus } from '../assets/js/contentList';
import { SnsBtn } from '.';
import '../assets//scss/_menulist.scss';

const MenuList = props => {
    const wrapperClass = props.type === 'top' ? 'top__menuwrapper' : 'footer__menuwrapper';
    const className = props.type === 'top' ? 'top__menulist' : 'footer__menulist'

    return (
        <div className={wrapperClass}>
            <ul className={className}>
                {
                    menus.map( item => {
                        return <li className={className + '__item'} key={item}>
                            <span>{item}</span>
                        </li>
                    } )
                }
            </ul>
            <SnsBtn type={props.type} />
        </div>
    )
}

export default MenuList;