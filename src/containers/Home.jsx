import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import HeroCard from '../components/HeroCard'
import './Home.css'

const Home = () => {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then(result => result.json())
      .then(result => {
        let marvelHeroes = []
        result.forEach(hero => {
          if(hero.biography.publisher === 'Marvel Comics') {
            marvelHeroes.push(hero)
          }
        })
        setHeroes(marvelHeroes)
        console.log(marvelHeroes)
      })
      .catch(console.log)
  }, [])

  return (
    <div>
      <Container maxWidth="lg">
        <div className="banner">
          <p className="shield-text">Strategic Homeland Intervention, Enforcement and Logistics Division</p>
          <hr></hr>
          DATABASE OF ENHANCED INDIVIDUALS
        </div>
        <div className="heroes-container">
        <Grid container spacing={3}>
          {
            heroes.map(hero => (
              <Grid key={hero.id} item md={2}>
                <HeroCard hero={hero}></HeroCard>
              </Grid>
            ))
          }
        </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Home
