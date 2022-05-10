
export default function Card({ card }) {
    const {title, location, description, image, link, date} = card;
    return (
        <div className="card-container">
            <img src={image} className="card-image"></img>
            <div className="card-info">
                <div className="location-info">
                    <img className="pin" src="./images/pin.png"></img>
                    <h3 className="location">{location.toUpperCase()}</h3>
                    <a href={link} className="grey">View on Google Maps</a>
                </div>
                <h1 className='card-title'>{title}</h1>
                <h4 className='date'>{date}</h4>
                <p className='description'>{description}</p>
            </div>
        </div>
    )
}