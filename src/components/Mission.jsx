import '../assets/scss/_mission.scss';

const Mission = () => {
    return (
        <div id="mission" className="contents mission">
            <h2>ミッション</h2>
            <div className="mission__wrapper">
                <div className="mission__bg__wrapper">
                    <div className="mission__bg"></div>
                </div>
                <div className="mission__txt_filed">
                    <div className="mission__intro mission__content">
                        <p className="mission__serif">「あの火事は絶対におかしい――」</p>
                        <p>実際の廃校を舞台に、謎を解いて火事の原因を突き止めろ！</p>
                    </div>
                    <div className="content__body mission__content">
                        <p>探偵のあなたは、「<span>火事の原因を突き止めてほしい</span>」という依頼をクリアしてもらいます。</p>
                        <p>なぜか、この廃校には至る所にお札が貼ってあります。</p>
                        <p>あなたが村の住人たちに聞こうとしても、</p>
                        <p>住人たちはその事にはいっさい触れたがりません。</p>
                        <p>ただ、どうやら7つの不可思議な現象が起きるようです。</p>
                        <p>廃校を探索して７つの謎を解き明かし、</p>
                        <p>無事、火事の原因を突き止められるでしょうか？</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Mission;