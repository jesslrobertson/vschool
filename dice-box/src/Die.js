export default function Die(props){
    const {dice} = props;

    return (
        <div>
            <h1 key={dice[2]+10}>{dice[2]}</h1>
        </div>
    )
}