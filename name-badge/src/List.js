export default function List(props) {
    const {list} = props
    
    const badges = list.map((badge, index) => {
        const {firstName, lastName, email, birthPlace, phone, favFood, about} = badge;
        let isOdd = index % 2
        return (
            <div key={index} className='badge'>
                <header
                style={isOdd ? {background: 'blue'} : {background: 'purple'}}>
                    <h3>Badge</h3>
                </header>
                <p className='info name left '>{`Name: ${firstName} ${lastName}`}</p>
                <p className='info phone right'>{`Phone: ${phone}`}</p>
                <p className='info birth-place left'>{`Place of Birth: ${birthPlace}`}</p>
                <p className='info food right'>{`Favorite Food: ${favFood}`}</p>
                <p className='info email left'>{`Email: ${email}`}</p>
                <p className='info empty'></p>
                <div>
                    <p className='about'>{`About: ${about}`}</p>
                </div>
            </div>
        )
    })
    console.log(badges)
    return (
        <div>
            {badges}
        </div>
    )
}