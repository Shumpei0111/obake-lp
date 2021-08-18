import { menus } from '../assets/js/contentList';
import { SnsBtn } from '.';
import '../assets//scss/_menulist.scss';

const MenuList = props => {
    const wrapperClass = props.type === 'top' ? 'top__menuwrapper' : 'footer__menuwrapper';
    const className = props.type === 'top' ? 'top__menulist' : 'footer__menulist';

    return (
        <div className={wrapperClass}>
            <ul className={className}>
                {
                    menus.map( item => {
                        const toLink = (
                            () => {
                                if( item === 'ストーリー' ) return props.scrollPacks.toStory;
                                if( item === 'ミッション' ) return props.scrollPacks.toMission;
                                if( item === 'ランキング' ) return props.scrollPacks.toRanking;
                                if( item === '開催日時' ) return props.scrollPacks.toPlan;
                                if( item === '注意事項' ) return props.scrollPacks.toAttention;
                                return props.scrollPacks.toTop;
                            }
                        )();

                        return ( 
                            <li className={className + '__item'} key={item} onClick={toLink}>
                                <span>{item}</span>
                            </li>
                        )
                    } )
                }
            </ul>
            <SnsBtn type={props.type} />
        </div>
    )
}

export default MenuList;