import Twitter from './images/twitter-icon.png'
import Facebook from './images/facebook-icon.png'
import Instagram from './images/insta-icon.png'
import Git from './images/git-icon.png'




export default function footer(){
    return(
        <footer className="footer">
            <div className='icon-box'>
                <img className='icon' src={Twitter}></img>
                <img className='icon' src={Facebook}></img>
                <img className='icon' src={Instagram}></img>
                <img className='icon' src={Git}></img>
            </div>
        </footer>
    )
}