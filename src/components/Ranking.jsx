import '../assets/scss/_ranking.scss';

const Ranking = () => {
    return (
        <div id="ranking" className="contents">
            <h2>ランキング</h2>
            <div className="ranking__caption">
                <p>Twitter連動企画「クリアタイムランキング」開催中！</p>
                <p>期間中、クリアタイムのランキングを掲載します。</p>
                <p><span>デイリーランキング</span>と<span>総合ランキング</span>を毎日発表！クリアタイム1位を目指せ！</p>
            </div>
            <div className="ranking__container">
                <div className="ranking__wrapper">
                    <p className="ranking__label">総合ランキング</p>
                    <div>
                        <p>
                        1位　モック山テスト太郎<br />
                        2位　アール川スペックの介<br />
                        3位　難読漢字01-_;:/+&gth;script<br />
                        </p>
                    </div>
                </div>
                <div className="ranking__wrapper">
                    <p className="ranking__label">デイリーランキング</p>
                    <div>
                        <p>
                        1位　モック山テスト太郎<br />
                        2位　アール川スペックの介<br />
                        3位　難読漢字01-_;:/+&gth;script<br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="ranking__other_ranks">
                <p>10位までのランキングを見る ▼</p>
            </div>
            <div className="ranking__sns_intro">
                <p>イベント公式Twitterをフォロー！</p>
                <p>↓</p>
                <a href="https://twitter.com/seventhseven" target="_blank" rel="noreferrer noopener">Twitter</a>
            </div>
        </div>
    )
};

export default Ranking;