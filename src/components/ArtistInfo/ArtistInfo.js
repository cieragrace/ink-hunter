import './ArtistInfo.css'
import getArtistAPICalls from '../../apiCalls'
import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from "react-router-dom"
import PropTypes from 'prop-types'
import ErrorPage from '../ErrorPage/ErrorPage'

const ArtistInfo = ({ setSingleArtist, singleArtist}) => {
const { artistid } = useParams();
  // const [singleArtist, setSingleArtist] = useState(null);

  useEffect(() => {
    console.log('Artist ID:', artistid);
    getArtistAPICalls(`artists/${artistid}`)
      .then(data => {
        console.log(data);
        setSingleArtist(data.artist);
      })
      .catch(error => {
        console.log(error);
        setSingleArtist(null);
      });
  }, [artistid, setSingleArtist]);

  // const { name, shop, phone, img, instagram, id } = singleArtist;

  return (
    <div className='artist-info-container'>
      <div className='left-side'>
        <div className='artist-images'>
          <div className='artist-image-wrapper'>
            <img className='image' src={singleArtist.img[0]} alt='artist-1'/>
          </div>
          <div className='artist-image-wrapper'>
            <img src={singleArtist.img[1]} alt='artist-2'/>
          </div>
          <div className='artist-image-wrapper'>
            <img src={singleArtist.img[2]} alt='artist-3'/>
          </div>
        </div>
      </div>
      <div className='artist-details'>
        <h1 className='artist-name'>{singleArtist.name}</h1>
        <ul>
          <h3 className='shop-name'>{singleArtist.shop}</h3>
          <p className='phone'>{singleArtist.phone}</p>
          <p className='insta-handle'>{singleArtist.instagram}</p>
        </ul>
        <div className='buttons-container'>
          <a href={`https://www.instagram.com/${singleArtist.instagram}`} target="_blank" rel="noopener noreferrer" className={`nav insta-${singleArtist.id}`}>
            <div className='insta'></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;