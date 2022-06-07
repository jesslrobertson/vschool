export default function List(props) {
    const {list} = props;
    console.log(list)
    const names = list.map((name => <h1 key={name}>{name}</h1>));

    return (
        <ul className='list'>
            {names}
        </ul>
    )
}