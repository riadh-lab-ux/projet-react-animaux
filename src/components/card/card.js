import './card.modules.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.image} alt={props.alt} loading='lazy'/>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
