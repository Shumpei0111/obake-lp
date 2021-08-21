import { menus } from '../assets/js/contentList';
import { SnsBtn } from '.';
import '../assets//scss/_menulist.scss';

const MenuList = props => {
    const wrapperClass = props.type === 'top' ? 'top__menuwrapper' : 'footer__menuwrapper';
    const className    = props.type === 'top' ? 'top__menulist' : 'footer__menulist';

    const inViewClass  = (
        () => {
            if( props.type === 'top' && props.inView ) {
                return '';
            } else {
                return 'onDisplay'
            }
        }
    )();

    return (
        <div className={`${wrapperClass} ${inViewClass}`}>
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

                        const itemGenre = (
                            () => {
                                if( item === 'ストーリー' ) return 'story';
                                if( item === 'ミッション' ) return 'mission';
                                if( item === 'ランキング' ) return 'ranking';
                                if( item === '開催日時' ) return 'plan';
                                if( item === '注意事項' ) return 'attention';
                                return '';
                            }
                        )();

                        const icon = (
                            () => {
                                if( item === 'ストーリー' ) return <i className="fas fa-book-open"></i>
                                if( item === 'ミッション' ) return <i className="fas fa-clipboard-check"></i>;
                                if( item === 'ランキング' ) return <i className="fas fa-trophy"></i>;
                                if( item === '開催日時' ) return <i className="far fa-calendar-alt"></i>;
                                if( item === '注意事項' ) return <i className="fas fa-exclamation-triangle"></i>;
                            }
                        )();

                        return ( 
                            <li className={`${className + '__item'} ${'to_' + itemGenre}`} key={item} onClick={toLink}>
                                {icon}
                                <span>
                                    {item}
                                </span>
                            </li>
                        )
                    } )
                }
                <li className={className + '__item'}>
                    <SnsBtn type={props.type} inView={inViewClass} />
                </li>
            </ul>
        </div>
    )
}

export default MenuList;