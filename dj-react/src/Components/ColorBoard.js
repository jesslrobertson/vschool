export default function ColorBoard(props){
    const {colors} = props;
    const squareColor = colors.map((color, index) => {
        return <div className={`square-${index}`} style={{ backgroundColor: color}} key={index}></div>
    }) 
    return(
        <div className="board-container">
            <div className="color-board">
                {squareColor}
            </div>
        </div>
    )
}