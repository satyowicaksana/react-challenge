import React from 'react';
import Container from '@material-ui/core/Container'
import { useSelector } from 'react-redux'
import './InfoBanner.css'

export default () => {
  const hero = useSelector(state => state.hero)
  return (
    <div className="info-banner">
      <Container maxWidth="lg">
        <div className="banner-content-name">
          <div className="info-hero-full-name">
            { hero.biography.fullName }
          </div>
          <div className="info-hero-name">
            { hero.name.toUpperCase() }
          </div>
        </div>
        <div className="banner-image-container">
          <img className="banner-image" src={require('../assets/shield-logo-blue.png')} alt="shield-logo"/>
        </div>
      </Container>
    </div>
  )
}