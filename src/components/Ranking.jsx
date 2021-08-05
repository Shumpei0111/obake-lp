import '../assets/scss/_ranking.scss';

const Ranking = () => {
    return (
        <div id="ranking" className="contents">
            <h2>ランキング</h2>
            <div>
                <p>期間中、クリアタイムのランキングを掲載します。デイリーランキングと総合ランキングを毎日発表！
Twitterとも連動しているので、逐一チェックすることができます。</p>
            </div>
            <div className="ranking__container">
                <div className="ranking__wrapper">
                    <p>総合ランキング</p>
                    <div>
                        <p>
                        1位   モック山テスト太郎<br />
                        2位　アール川スペックの介<br />
                        3位　難読漢字01-_;:/+&gth;script<br />
                        </p>
                    </div>
                </div>
                <div className="ranking__wrapper">
                    <p>デイリーランキング</p>
                    <div>
                        <p>
                        1位   モック山テスト太郎<br />
                        2位　アール川スペックの介<br />
                        3位　難読漢字01-_;:/+&gth;script<br />
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p>10位までのランキングを見る ▼</p>
            </div>
        </div>
    )
};

export default Ranking;