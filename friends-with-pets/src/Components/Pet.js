

export default function Pets({pet}){
    const {name, breed} = pet;
    function correctCase(str) {
        let firstChar = str.slice(0, 1);
        let theRest = str.slice(1);
        return firstChar.toUpperCase() + theRest;
    }
    return(
        <div className='pet-container'>
            <h3 className='pet-name'>{correctCase(name)}
            </h3>
            <h5 className='pet-breed'>{breed}</h5>
        </div>
    )
}