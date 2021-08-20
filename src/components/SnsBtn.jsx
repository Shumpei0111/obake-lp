import '../assets/scss/_snsbtn.scss';

const SnsBtn = props => {
    const className = props.type === 'top' ? 'top__snsbtn' : 'footer__snsbtn'

    return (
        <div className={className}>
            <ul className={`${props.inView}`}>
                <li className='sns__item'>
                    <a href='https://twitter.com/seventhseven' rel='noopener noreferrer' target='_blank'>
                        Twitter
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SnsBtn;