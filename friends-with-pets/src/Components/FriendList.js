import Friend from './Friend'
import Pet from './Pet'
import data from './data'


export default function FriendList(){
    return (
        <div className="list-container">
                {data.map(friend => {
                    return (
                        <div className='friend-pet-container' key={friend.name}>
                            <div className="friend-container">
                                <Friend friend={friend}  />
                            </div>
                            <div className='pet-container'>
                                {friend.pets.map(pet => (
                                    <Pet pet={pet} key={pet.name} />
                                ))}
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}