import './ArtistCard.css'
import { NavLink } from 'react-router-dom'

const ArtistCard = (props) => {
  return(
    <NavLink to={`/${props.id}`} className={`artist-card ${props.id}`}>
      <div className='card-deets'> 
          <h1 className='h1'>{props.name}</h1>
          <h3 className='h3'>{props.shop}</h3>
        </div>
    </NavLink>
  )
}

export default ArtistCard