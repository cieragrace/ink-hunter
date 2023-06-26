import './Home.css'
import ArtistGrid from '../ArtistsGrid/ArtistGrid'
import Form from '../Form/Form'

const Home = ({artists, filteredArtists, singleArtist, setFilteredArtists}) => {
  return(
    <div className='home-container'>
      <Form 
        artists={artists} 
        singleArtist={singleArtist} 
        setFilteredArtists={setFilteredArtists}
      />
      <ArtistGrid 
        artists={filteredArtists}
      />
    </div>
  )
}

export default Home