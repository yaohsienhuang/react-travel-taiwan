import { useState, useEffect } from "react";
import { getLsItem, getAchieve } from "../common";
import InfoItem from "../components/InfoItem";
import {LevelName} from "../components/LevelName";

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
            {LevelName(achieveRatio)}
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