import '../assets/scss/_snsbtn.scss';

const SnsBtn = props => {
    const className = props.type === 'top' ? 'top__snsbtn' : 'footer__snsbtn'

    return (
        <div className={className}>
            <ul>
                <li>Twitter</li>
            </ul>
        </div>
    )
}

export default SnsBtn;