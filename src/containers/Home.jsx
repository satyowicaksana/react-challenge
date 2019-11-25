import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import HeroCard from '../components/HeroCard'

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
      })
      .catch(console.log)
  }, [])

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {
            heroes.map(hero => (
              <Grid key={hero.id} item md={2}>
                <HeroCard hero={hero}></HeroCard>
              </Grid>
            ))
          }
        </Grid>
        <p>{ JSON.stringify(heroes) }</p>
      </Container>
    </div>
  );
}

export default Home
