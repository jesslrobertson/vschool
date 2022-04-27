import logo from '../images/airbnb.png'

export default function Header() {
    return(
        <div className='header'>
            <img className='logo' src={logo}></img>
        </div>
    )
}