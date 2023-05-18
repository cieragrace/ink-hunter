import { useEffect, useState } from 'react'
import './ArtistGrid.css'
import getArtistAPICalls from '../../apiCalls'

const ArtistsGrid = () => {
const [artists, setArtists] = useState([])

useEffect(() => {
  const getData = () => {
    getArtistAPICalls('artists')
    .then((data) => setArtists(data.artists))
    .catch((error) => console.log("error"))
  }
  getData()
}, [])

const artistCards = props.artists.map(artist => {
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