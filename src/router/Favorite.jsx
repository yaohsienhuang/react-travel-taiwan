import { useState, useEffect } from "react";
import { getLsItem, getFavorite } from "../common";
import InfoItem from "../components/InfoItem";


export default function Favorite() {
    const [infoItems, setInfoItems] = useState(JSON.parse(getLsItem('infos')));
    let favorite = getFavorite();

    let favoriteList = [];
    infoItems.forEach(item => {
        if (favorite.indexOf(item.Id) !== -1) {
            favoriteList.push(item);
        }
    })

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <>
            <h2>我的最愛</h2>
            <ul className="info-list">
                {favoriteList.map(item => {
                    return <InfoItem info={item} key={item.Id}/>
                })}
            </ul>
        </>
    )
}