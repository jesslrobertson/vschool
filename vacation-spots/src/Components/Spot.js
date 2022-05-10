export default function Spot({spot}){
    const { place, image, price, timeToGo } = spot;
    let cost;
    if (price < 500){
        cost = "$"
    } else if (price < 1000){
        cost = "$$"
    } else {
        cost = "$$$"
    }
    let container = 'spot-container';

    return (
        <div className={`${timeToGo} ${container}`}>
            <img className='spot-image' src={image}></img>
            <div className='spot-info'>
                <h3 className='spot-place'>
                    {place}
                </h3>
                <h5 className='spot-season'>{timeToGo}</h5>
                <h5 className='spot-price'>{cost}</h5>
            </div>
        </div>
    )
}