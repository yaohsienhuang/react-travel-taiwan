import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { setRecord,setHistory,getFavorite,getAchieve } from "../common";

function GoogleMapBtn(props) {
    const { Py, Px } = props;
    return (
        <a href={`https://www.google.com/maps?q=${Py},${Px}`} className="nes-btn is-warning">Google Map 連結</a>
    )
}

export default function Detail(props) {
    const state = useLocation();
    const condition = state.state.condition || 0;
    const scroll = state.state.scroll || 0;

    const [info, setInfo] = useState(state.state.data);
    const { Id, Name, Picture1, Picdescribe1, Toldescribe, Add, Tel, Travellinginfo, Opentime, Px, Py, Website } = info;
    let favoriteList = getFavorite()
    let achieveList = getAchieve()
    const [favorite, setFavorite] = useState(favoriteList);
    const [achieve, setAchieve] = useState(achieveList);
    setHistory(Id);

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    const changeFavorite=()=>{setRecord('favorite',setFavorite,Id)};
    const changeAchieve=()=>{setRecord('achieve',setAchieve,Id)};

    return (
        <section className="detail">
            <section className="nes-container is-dark with-title">
                <p className="title">{Name}</p>
                <img src={Picture1} alt={Picdescribe1} />
                <a onClick={() => changeFavorite()}>
                    <h3>加入最愛</h3>
                    {favorite.indexOf(Id)==-1?
                        <i className="nes-icon is-large is-transparent heart"></i> : <i className="nes-icon is-large heart"></i>
                    }
                </a>
                <a onClick={() => changeAchieve('achieve')}>
                    <h3>加入成就</h3>
                    {achieve.indexOf(Id)==-1?
                        <i class="nes-icon is-large star is-transparent"></i> : <i class="nes-icon is-large star"></i>
                    }
                </a>
                <div className="lists">
                    <ul className="nes-list lists is-circle">
                        {Tel ? <li>電話: {Tel}</li> : ''}
                        {Opentime ? <li>開放時間：: {Opentime}</li> : ''}
                        {Add ? <li>地址：: {Add}</li> : ''}
                        {Website ? <li>網站: {Website}</li> : ''}

                    </ul>
                </div>
                <details><summary>詳細介紹</summary>
                    <p className="info-desc">{Toldescribe}</p>
                </details>
                {Travellinginfo ?
                    <p className="nes-balloon from-left nes-pointer info-travel">{Travellinginfo}</p> :''
                }
                    {(Py && Px) ?
                        <div>
                            <GoogleMapBtn Py={Py} Px={Px} />
                        </div> : ''}

            </section>
            <div className="back-btn">
                <Link className="nes-btn" to={`/list`} state={{ condition, scroll }}>回列表頁</Link>
            </div>
        </section>
    )
}