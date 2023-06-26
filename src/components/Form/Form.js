import './Form.css'
import './Form.css'
import React, { Component } from 'react'
// import Select from 'react-select'
import { MultiSelect } from "react-multi-select-component"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const options = [
  'traditional', 
  'color realism', 
  'large scale', 
  'american traditional', 
  'black work', 
  'nature inspired', 
  'celtic', 
  'geometric', 
  'black and grey', 
  'fine lines', 
  'dot work', 
  'lettering', 
  'japanese', 
  'irezumi', 
  'horimono', 
  'machine free', 
  'stick and poke', 
  'bold', 
  'modern', 
  'dark', 
  'horror', 
  'neo traditional', 
  'illustrative', 
  'flowers', 
  'bright colors', 
  'animals', 
  'space', 
  'realism', 
  'micro-realism', 
  'portrait', 
  'ornamental', 
  'anime', 
  'watercolor', 
  'minimalist', 
  'surreal', 
  'psychedelic', 
  'cartoon', 
]

const Form = ({  artists, setFilteredArtists }) => {
const [selectedOptions, setSelectedOptions] = useState([])

const handleChange = ( selectedOptions ) => {
  setSelectedOptions(selectedOptions)
}

useEffect(() => {
  const filterArtists = () => {
    const labels = selectedOptions.map((option) => option.label);
    if (labels.length === 0) {
      setFilteredArtists(artists);
    } else {
      const filtered = artists.filter((artist) =>
        artist.keywords.some((keyword) => labels.includes(keyword))
      );
      setFilteredArtists(filtered);
    }
  };

  filterArtists();
}, [selectedOptions, artists, setFilteredArtists]);

  return(
    <div className='form-container'>
      <div className='input-container'>
        <MultiSelect 
          className='selects' 
          options={options.map((option) => ({key: option, value: option, label: option}))} 
          value={selectedOptions}
          onChange={handleChange}
          placeholder='Provide some key words'/>
      </div>
    </div>
  )
}

export default Form 
