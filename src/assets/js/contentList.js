// サイトタイトル
export const siteTitle = {
    kanji: "廃校探索",
    rubi : "はいこうたんさく",
    en   : "Exploring Closed Schools"
};

export const catchCopy = "日本初！実際の廃校を舞台に謎解き × お化け屋敷を体験型アトラクション、この夏開催！";

// 画面に表示されるコンテンツメニュー（アンカーリンクになりえるコンテンツ名）のリスト
export const menus = [ "ストーリー", "ミッション", "ランキング", "開催日時", "注意事項" ];

// コースプラン
export const plans = {
    typeA: {
        name: "Aプラン",
        displayName: "Aプラン",
        path: ["青森駅", "ミステリーツアー(このイベント)", "まかど観光ホテル", "野辺地町観光物産ＰＲセンター", "青森駅"],
        price: 0,
    },
    
    typeB: {
        name: "Bプラン",
        displayName: "Bプラン",
        path: "ミステリーツアー(このイベント)のみ体験することができます",
        price: {
            adalut: {
                type: "大人",
                display: "大人",
                price: "",
            },
            child: {
                type: "子供",
                display: ["子供","中学生以上"],
                price: ""
            }
        }
    },

    institutions: [
        {
            name: "まかど観光ホテル",
            address: "",
            tel: "",
            url: ""
        },

        {
            name: "野辺地町観光物産ＰＲセンター",
            address: "",
            tel: "",
            url: ""
        },
    ]
}

// 注意事項
export const attentions = [
    "中学生以上が対象（１名につき保護者が１名必要）",
    "１回定員４名",
    "心臓疾患や他の疾患、妊娠中のお客様はお控えください",
    "階段の登り降りが困難な方もご参加いただけません。",
    "酒気帯びの方はご参加いただけません。",
    "熱、その他風邪等の諸症状がある方はご参加いただけません。",
]


// スタッフ
export const stuff = "■監督：星宮 ■シナリオ：Shumepi ■監修：怪談蒐集家 山田二郎 青森怪談家 死之崎和村 ■企画：1月の朝 ■協力：青森県上北郡野辺地町役場 自英隊青森駐屯地";


// コピーライト
export const copyright = "(c) 廃校探索製作委員会 All Rights Reserved.";