import { Link, useNavigate } from "react-router-dom";
import { getHistory, getFavorite } from "../common";

export default function Header() {
    const navigate = useNavigate();
    let hasHistory = getHistory().length || 0;
    let hasFavorite = getFavorite().length || 0;

    const backIndex = () => {
        navigate("/");
    }

    return (
        <header >
            <div className="nes-container is-dark">
                <div className="header">
                    <div className="header_logo" onClick={backIndex}>
                        <section className="icon-list">
                            <i className="snes-jp-logo"></i>
                        </section>
                        <h1>高雄旅遊網</h1>
                    </div>
                    <nav>
                        <Link className="nes-btn" to="/list">景點列表</Link>
                        <Link className={hasHistory > 0 ? "nes-btn" : "nes-btn is-disabled"} to="/history">瀏覽紀錄</Link>
                        <Link className={hasFavorite > 0 ? "nes-btn" : "nes-btn is-disabled"} to="/favorite">我的最愛</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}