import './App.css'
import Home from '../Home/Home';
import { useState, useEffect} from 'react'
import getArtistAPICalls from '../../apiCalls';
import { Route, Switch } from 'react-router-dom'
import ArtistInfo from '../ArtistInfo/ArtistInfo';

const App = () => {
const [artists, setArtists] = useState([])
const [filteredArtists, setFilteredArtists] = useState([])
const [singleArtist, setSingleArtist] = useState(null)

useEffect(() => {
  const getData = () => {
    getArtistAPICalls('artists')
    .then((data) => setArtists(data.artists))
    .catch((error) => console.log("error"))
  }
  getData()
}, [])  

const showSingleArtist = (id) => {
  getArtistAPICalls(`artists/${id}`)
    .then((data) => {
      console.log('data', data);
      setSingleArtist(data);
    })
    .catch((error) => console.log(error));
};

  return (
    <div className="app-container">
      <Switch>
        <Route
          exact path='/'
          render={() => (
            <Home 
              artists={artists} 
              setArtists={setArtists}
              filteredArtists={filteredArtists} 
              singleArtist={singleArtist} 
              setFilteredArtists={setFilteredArtists}
            />
          )}
        />
        <Route
          exact path='/:id'
          render={({match}) => (
            <ArtistInfo 
              singleArtist={singleArtist} 
              artistid={match.params.id}
              setSingleArtist={setSingleArtist}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
