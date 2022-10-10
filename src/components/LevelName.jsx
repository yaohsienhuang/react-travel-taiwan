
export const LevelName=(ratio)=>{
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