
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { zipCode } from "../assets/zipCode";
import { getLsItem, setLsItem } from "../common";
import InfoItem from "../components/InfoItem";


export default function List() {
    const state = useLocation();
    let condition = state.state ? state.state.condition : 'selectAll';
    let scroll = state.state ? state.state.scroll : 0;

    const [scrollV, setScrollV] = useState(0);
    const [infoItems, setInfoItems] = useState([]);
    const [filter, setFilter] = useState(condition);
    const [search, setSearch] = useState('');
    const [zipCodeList] = useState(zipCode);

    const currentInfoItems = () => {
        if (filter === 'selectAll'){
            if (!search){
                return infoItems
            } else{
                return infoItems.filter(item => item.Name.includes(search));
            }
        }else{
            if (!search){
                return infoItems.filter(item => item.Zipcode === filter);
            } else{
                return infoItems.filter(item => (item.Zipcode === filter) && (item.Name.includes(search)));
            }
        }
    }

    const getApiData = () => {
        if (getLsItem('infos')){
            setInfoItems(JSON.parse(getLsItem('infos')));
        }else {
            fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
                .then(res => res.json())
                .then(result => {
                    setLsItem('infos', JSON.stringify(result.data.XML_Head.Infos.Info));
                    setInfoItems(result.data.XML_Head.Infos.Info);
                })
        }
    }

    useEffect(() => {
        getApiData();
        document.addEventListener("scroll", (e) => {
            setScrollV(window.scrollY);
        });
        setTimeout(() => {
            window.scrollTo({ top: scroll });
        }, 100);
    }, [])

    return (
        <>
            <section className="info-filter">
                <div className="info-filter-select">
                    <div className="nes-select">
                        <select id="info-filter-select-input" value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value="selectAll">請選擇區域</option>
                            {zipCodeList.map(item => {
                                const { zip, name } = item;
                                return <option key={zip} value={zip} >{name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="info-filter-search">
                    <div className="nes-field">
                        <input type="text" id="name_field" class="nes-input" placeholder="Search title" onChange={(e) => setSearch(e.target.value)}></input>
                    </div>
                </div>
            </section>
            <ul id="list" className="info-list">
                {currentInfoItems().map(item => {
                    return <InfoItem id={item.Name} key={item.Id} info={item} condition={filter} scroll={scrollV}/>
                })}
            </ul>
        </>
    )
}