export default function Controls(props){
    const {setColor} = props    
    function changeColor(){
        setColor(prevColor =>{
            if (prevColor[0] === "white"){
                return ["black", "black", "black", "black"];
            } else {
                return ["white", "white", "white", "white"]
            }
        })
    }
    function topHalf(){
        setColor(prevColor=>{
            return([
                "purple", "purple", prevColor, prevColor
            ])
        })
    }
    function blueLeft(){
        setColor(prevColor=>{
            return([
                prevColor, prevColor, "blue", prevColor
            ])
        })
    }
    function blueRight(){
        setColor(prevColor=>{
            return([
                prevColor, prevColor, prevColor, "blue"
            ])
        })
    }
    return (
        <div className="controls-container">
            <div className='controls'>
                <button className="button-1" onClick={changeColor}>Flip</button>
                <button className="button-2" onClick={topHalf}>Purple Haze</button>
                <button className="button-3" onClick={blueLeft}>BBB</button>
                <button className="button-3" onClick={blueRight}>BBR</button>
            </div>
        </div>
    )
}