
export default function Friend({friend}){
    const {name, age} = friend;
    return(
        <div className="friend-container">
            <h3 className='friend-name'>{name}</h3>
            <h5 className='friend-age'>{age}</h5>
        </div>
    )
}