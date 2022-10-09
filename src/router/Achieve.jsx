import { useState, useEffect } from "react";
import { getLsItem, getAchieve } from "../common";
import InfoItem from "../components/InfoItem";


export default function Favorite() {
    const [infoItems, setInfoItems] = useState(JSON.parse(getLsItem('infos')));
    let achieve = getAchieve();

    let achieveList = [];
    infoItems.forEach(item => {
        if (achieve.indexOf(item.Id) !== -1) {
            achieveList.push(item);
        }
    })

    let achieveRatio=(achieveList.length*100/infoItems.length).toFixed(1)
    const levelName=(ratio)=>{
        switch(ratio){
            case ratio>=20 & ratio<40:
                return (
                    <>
                        <h2>成就徽章：高雄學子，正在認識高雄</h2>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star is-transparent"></i>
                        <i className="nes-icon is-large star is-transparent"></i>
                        <i className="nes-icon is-large star is-transparent"></i>
                    </>
                )
            case ratio>=40 & ratio<60:
                return (
                    <>
                        <h2>成就徽章：高雄嚮導，有事沒事就想來</h2>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star is-transparent"></i>
                        <i className="nes-icon is-large star is-transparent"></i>
                    </>
                )
            case ratio>=60 & ratio<80:
                return (
                    <>
                        <h2>成就徽章：高雄本地人，景點幾乎都去過
                        </h2>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star is-transparent"></i>
                    </>
                )
            case ratio>=80:
                return (
                    <>
                        <h2>成就徽章：高雄達人，高雄我最熟</h2>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star heart"></i>
                    </>
                )
            default:
                return (
                    <>
                        <h1>成就徽章：外地觀光客</h1>
                        <i className="nes-icon is-large star heart"></i>
                        <i className="nes-icon is-large star is-transparent"></i>
                        <i className="nes-icon is-large star is-transparent"></i>
                        <i className="nes-icon is-large star is-transparent"></i>
                        <i className="nes-icon is-large star is-transparent"></i>
                    </>
                    
                )
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <>
            <h2> 我的成就</h2>
            <h3>總景點數量：{infoItems.length} 個</h3>
            <h3>已達到成就：{achieveList.length} 個</h3>
            <h3>達成率：{achieveRatio} ％</h3>
            {levelName(achieveRatio)}
            <hr></hr>
            <h2>成就列表</h2>
            <ul className="info-list">
                {achieveList.map(item => {
                    return <InfoItem info={item} key={item.Id}/>
                })}
            </ul>
        </>
    )
}