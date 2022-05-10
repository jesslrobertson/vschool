import data from './data'
import Spot from './Spot'

export default function Main(){
    return(
        <div className='main-column'>
                <h1 className='main-tagline'>Choose your own adventure</h1>
            <div className='main-container'>
                {data.map(spot => <Spot spot={spot} key={spot.id}/>)}
            </div>
        </div>
    )
}