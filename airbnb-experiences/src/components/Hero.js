import HeroGrid from '../images/groupimg.png'

export default function Hero(){
    return(
        <div className='hero-container'>
            <img className='hero-grid' src={HeroGrid}></img>
            <h1 className='title'>Online Experiences</h1>
            <p className='p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}