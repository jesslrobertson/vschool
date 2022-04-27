import profilePic from "./images/IMG_2403.jpeg";
import emailIcon from "./images/mail.png"
import linkedIn from "./images/linkedin.png"

function Info(){
    return(
        <div className="info-container">
            <img className="profile-pic" src={profilePic}></img>
            <h1 className="fullName">Jess Robertson</h1>
            <h3 className="title">Fullstack Developer</h3>
            <small className="website">jessrobertsondev.website</small>
            <div className="buttonDiv">
                <button className="email-button button">
                    <img className="email-icon" src={emailIcon}></img>
                    Email
                </button>
                <button className="linkedin-button button">
                    <img className="linkedin-icon" src={linkedIn}></img>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}

export default Info; 