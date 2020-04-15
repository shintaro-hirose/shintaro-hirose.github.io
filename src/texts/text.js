import image1 from '../images/hcon-summary.png';
import image2 from '../images/typeee-summary.png';
import image3 from '../images/react-guess-summary.png';
import image4 from '../images/react-calculator-summary.png';
import image5 from '../images/react-name-summary.png';

export const workContents = [
    {
        workTitle: "Hcon",
        summaryImage: image1,
        workExplain: "ルービックキューブ目隠し競技用の大会サイト",
        demoUrl: "https://hcon-3bld.web.app/",
        githubUrl:"https://github.com/shintaro-hirose/hcon_client",
        char1:"Firebase Authentication によるログイン機能",
        char2:"cron job による定時更新",
        char3:"React によるSPA、レスポンシブデザイン",
        chipData: ["React.js", "Material-UI", "Redux", "node.js", "Firebase", "Cloud Function"]
    },
    {
        workTitle: "ホラー映画DB",
        summaryImage: "https://user-images.githubusercontent.com/48212107/79313331-2348e800-7f3b-11ea-83e6-885d6a532966.png",
        workExplain: "TMDB APIを利用して映画の検索、キーワード検索、予告の閲覧などができます。",
        demoUrl: "https://horror-movie-db.web.app/",
        githubUrl:"",
        char1:"redux-thunk, axiosを用いてWeb APIでjson形式のデータを取得",
        char2:"ReactによるSPA, レスポンシブ対応でネイティブアプリのような挙動を実現。",
        char3:"Reduxによる状態管理でデータfetchの最適化、UIの改善",
        chipData: ["React.js", "Material-UI", "Redux", "node.js", "Firebase", "redux-thunk"]
    },
    {
        workTitle: "typeee!",
        summaryImage: image2,
        workExplain: "英単語タイピング速度計測サイト",
        demoUrl: "https://shintaro-hirose.github.io/typeee/",
        githubUrl:"https://github.com/shintaro-hirose/typeee",
        char1:"タイム、タイピング速度のリアルタイム表示",
        char2:"React Hooksを用いたstateの管理",
        char3:"",
        chipData: ["React.js", "Material-UI", "Github Pages"]

    },
    {
        workTitle: "React Number Guess",
        summaryImage: image3,
        workExplain: "ランダムに生成された数字を当てるゲーム",
        demoUrl: "https://shintaro-hirose.github.io/react-number-guess/",
        githubUrl:"https://github.com/shintaro-hirose/react-number-guess",
        char1:"React Hooksを用いたstateの管理",
        char2:"",
        char3:"",
        chipData: ["React.js", "Material-UI", "Github Pages"]

    },
    {
        workTitle: "React Calculator",
        summaryImage: image4,
        workExplain: "四則演算、マイナス掛け、パーセント表示ができる簡易電卓",
        demoUrl: "https://shintaro-hirose.github.io/react-calculator/",
        githubUrl:"https://github.com/shintaro-hirose/react-calculator",
        char1:"React Hooksを用いたstateの管理",
        char2:"",
        char3:"",
        chipData: ["React.js", "Material-UI", "Github Pages"]

    },
    {
        workTitle: "ランダム名前生成くん",
        summaryImage: image5,
        workExplain: "独立行政法人情報処理推進機構(IPA)のMJ文字情報APIを使用して、人名に使われる漢字二字を生成します",
        demoUrl: "https://shintaro-hirose.github.io/react-name-generator/",
        githubUrl:"https://github.com/shintaro-hirose/react-name-generator",
        char1:"axiosのHTTPリクエストによるAPIの使用",
        char2:"",
        char3:"",
        chipData: ["React.js", "Material-UI", "axios" ,"Github Pages"]

    },
]