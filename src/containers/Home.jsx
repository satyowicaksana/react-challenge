import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import HeroCard from '../components/HeroCard'
import SearchForm from '../components/SearchForm'
import './Home.css'

const Home = () => {
  const [heroes, setHeroes] = useState([])
  const [displayedHeroes, setDisplayedHeroes] = useState([])

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
        setDisplayedHeroes(marvelHeroes)
      })
      .catch(console.log)
  }, [])

  const filterHeroes = (keyword) => {
    let result = []
    heroes.forEach(hero => {
      if(hero.name.toLowerCase().includes(keyword.toLowerCase())) {
        result.push(hero)
      }
    })
    setDisplayedHeroes(result)
  }

  return (
    <div>
      <Container maxWidth="lg">
        <div className="banner">
          <p className="shield-text">Strategic Homeland Intervention, Enforcement and Logistics Division</p>
          <hr></hr>
          DATABASE OF ENHANCED INDIVIDUALS
        </div>
        <SearchForm filterHeroes={filterHeroes}></SearchForm>
        <div className="heroes-container">
        <Grid container spacing={3}>
          {
            displayedHeroes.map(hero => (
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
