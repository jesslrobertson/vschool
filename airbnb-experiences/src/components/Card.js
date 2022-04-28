import kZaferes from '../images/katie-zaferes.png'
import star from '../images/star.png'

export default function Card(){
    return(
        <div className="cardContainer">
            <img className="cardImg" src={kZaferes}></img>
            <div className="statusFlag">
                <p>Sold Out</p>
            </div>
            <div className="ratings">
                <img className="star" src={star}></img>
                <p className="ratings-p">5.0 <span className="grey">(6)•USA</span>
                </p>
            </div>
            <p className="description">Life lessons with Katie Zaferes</p>
            <p className="price"><span className="bold">From $136</span> / person</p>
        </div>
    )
}