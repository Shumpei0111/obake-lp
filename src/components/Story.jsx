import '../assets/scss/_story.scss';

const Story = () => {
    return (
        <div id="story" className="contents story">
            <h2>ストーリー</h2>
            <div className="story__wrapper">
                <div className="story__strong">
                    <p>青森県野辺地町。</p>
                    <p><span className="story__top_strong">星駆</span>という小さな村に<span className="story__top_strong">奇妙な事件</span>が起こった</p>
                </div>
                <div>
                    <p>2021年3月に廃校になったばかりの中学校</p>
                    <p>7人の3年生を卒業させ、3/31に<span>廃校</span>となった</p>
                    <p>31日の夜に、卒業生7名が深夜の学校に忍び込んだ形跡がある。</p>
                    <p>A児の家からは思い出作りのために深夜の学校に忍び込むといった内容が書かれていた。</p>
                    <p>7名はいまだ<span>行方不明</span>である。</p>
                    <p>4月1日の夜に<span>火事</span>が起こる。燃えた後の校舎内からは何も発見されなかった。</p>
                    <p>原因も不明のまま、焼けて荒れた校舎だけが残っている。</p>
                    <p>住人たちは揃って口を閉し真実は闇の中。</p>
                    <p>あなたは火事の原因をつきとめ、行方不明となった子供たちの謎を解くことができるか...</p>
                </div>
            </div>
        </div>
    )
};

export default Story;