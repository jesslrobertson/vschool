import {useState} from 'react';

export default function Form(props) {
    const {setList} = props;
    const [nameBadge, setNameBadge] = useState({
        firstName: "", lastName: "", email: "", birthPlace: "", phone: "", favFood: "", about: ""
    })

    function handleChange(e) {
        
        setNameBadge(prevList => {
            return {
                ...prevList,
                [e.target.name]: e.target.value
            }
        })
    }
    function submitBadge(e){
        e.preventDefault()
        setList(prevList => [...prevList, nameBadge])
        
        setNameBadge({firstName: "", lastName: "", email: "", birthPlace: "", phone: "", favFood: "", about: ""})
    }
        
    

    return (
        <div className='form-container'>
            <form>
                <input minLength={3} className='small-input' 
                type='text' 
                placeholder='First Name' 
                name='firstName'
                value={nameBadge.firstName}
                onChange={handleChange}
                />
                <input minLength={3} className='small-input' 
                type='text' 
                placeholder='Last Name' 
                name='lastName'
                value={nameBadge.lastName}
                onChange={handleChange}
                />
                <input minLength={3} className='small-input' 
                type='email' 
                placeholder='Email' 
                name='email'
                value={nameBadge.email}
                onChange={handleChange}
                />
                <input minLength={3} className='small-input' 
                type='text' 
                placeholder='Place of Birth' 
                name='birthPlace'
                value={nameBadge.birthPlace}
                onChange={handleChange}
                />
                <input minLength={3} className='small-input' 
                type='number' 
                placeholder='Phone Number' 
                pattern='[0-9]*'
                name='phone'
                value={nameBadge.phone}
                onChange={handleChange}
                />
                <input minLength={3} className='small-input' 
                type='text' 
                placeholder='Favorite Food' 
                name='favFood'
                value={nameBadge.favFood}
                onChange={handleChange}
                />
                <textarea 
                minLength={3}
                type='textarea' 
                placeholder='About' 
                name='about'
                value={nameBadge.about}
                className='text-area'
                onChange={handleChange}
                ></textarea>
                <button disabled={
                    nameBadge.firstName.length <1 &&
                    nameBadge.lastName.length <1 &&
                    nameBadge.email.length <1 &&
                    nameBadge.birthPlace.length <1 &&
                    nameBadge.phone.length <1 &&
                    nameBadge.favFood.length <1 &&
                    nameBadge.about.length <1
                } 
                onClick={submitBadge}>Submit</button>
            </form>
        </div>
    )
}