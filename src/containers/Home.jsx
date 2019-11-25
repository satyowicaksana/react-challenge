import React from 'react';
import Container from '@material-ui/core/Container'
import HeroCard from '../components/HeroCard'

const Home = () => {
  return (
    <div>
      <Container maxWidth="md">
        <HeroCard></HeroCard>
      </Container>
    </div>
  );
}

export default Home
