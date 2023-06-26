import { useEffect, useState } from 'react'
import './ArtistGrid.css'
import getArtistAPICalls from '../../apiCalls'
import ArtistCard from '../ArtistCard/ArtistCard'

const ArtistsGrid = ({artists}) => {

const artistCards = artists.map(artist => {
  return(
    <ArtistCard 
      id={artist.id}
      key={artist.id}
      name={artist.name}
      shop={artist.shop}
      img={artist.img}
      keywords={artist.keywords}
      phone={artist.phone}
    />
  )
})

  return(
    <div className='artists-container'>
      {artistCards}
    </div>
  )
}

export default ArtistsGrid