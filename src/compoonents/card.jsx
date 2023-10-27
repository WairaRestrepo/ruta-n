import'./card.css'

const Card = ({char}) => {
    return (
    <div className="card">

        <img className='card-imagen' src={char.image} alt="character picture" />
        <h2>{char.name}</h2>
        <p>{char.species}</p>
        <p>status: {char.status}</p>

    </div>);
}; 

export default Card
