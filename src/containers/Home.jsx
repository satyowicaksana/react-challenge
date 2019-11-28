import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import HeroCard from '../components/HeroCard'
import SearchForm from '../components/SearchForm'
import ReactLoading from 'react-loading'
import { fetchHeroes, setHero } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'

const Home = () => {
  const heroes = useSelector(state => state.heroes)
  const [displayedHeroes, setDisplayedHeroes] = useState([])
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if(heroes.length === 0) {
      dispatch(fetchHeroes())
    } else {
      dispatch(setHero(null))
      setDisplayedHeroes(heroes)
    }
  }, [heroes, dispatch])

  const filterHeroes = (keyword) => {
    let result = []
    heroes.forEach(hero => {
      if(hero.name.toLowerCase().includes(keyword.toLowerCase())) {
        result.push(hero)
      }
    })
    setFilter(keyword)
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
        { (displayedHeroes.length === 0 && !filter) && <ReactLoading className="home-loading" type={'spinningBubbles'} color={'#61DAFB'} height={100} width={100} />}
        { (displayedHeroes.length === 0 && filter) && <div className="home-loading">No match found.</div>}
        <Grid className="heroes-container" container spacing={3}>
          {
            displayedHeroes.map(hero => (
              <Grid key={hero.id} item lg={2} md={3} xs={6} >
                <HeroCard hero={hero}></HeroCard>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </div>
  );
}

export default Home
