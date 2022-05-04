
export default function Card({ card }) {
    const { coverImg, stats, location, title, price, openSpots } = card;
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="cardContainer">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../images/${coverImg}`} className="cardImg" />
            <div className="ratings">
                <img src="/images/star.png" className="star" />
                <span>{stats.rating}</span>
                <span className="grey">({stats.reviewCount}) •   </span>
                <span className="grey"> { location}</span>
            </div>
            <p className="description">{title}</p>
            <p className="price"><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}