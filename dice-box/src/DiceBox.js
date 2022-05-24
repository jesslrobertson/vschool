export default function DiceBox(props){
    const {dice, setDice} = props;
    function roll(){
        setDice(dice.map(() => {
            return Math.floor(Math.random() * 6)
        }))
    }
    const displayDice = dice.map((die, index) => {
        return <h2 className={`die-${index + 1}`} key={index}>{die}</h2>
    })


    return (
        <div className='dice-box'>
            {displayDice}
            <button onClick={roll}>Roll</button>
        </div>
    )
}
