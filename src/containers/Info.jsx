import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import HeroCard from '../components/HeroCard'
import InfoContent from '../components/InfoContent'
import {
  withRouter
} from 'react-router-dom'
import './Info.css'

class Info extends Component {
  state = {
    hero: null
  }
  componentDidMount() {
    const { match } = this.props
    const id = match.params.slug.split('-')[0]
    console.log(id)
    fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
      .then(result => result.json())
      .then(result => {
        this.setState({hero: result})
        // bannerStyle.backgroundImage = this.state.hero.images.lg
        console.log(this.state.hero)
      })
      .catch(console.log)
  }
  render() {
    let { hero } = this.state
    if(!hero) {
      return (
        <>
          <div className="info-banner">
            <Container maxWidth="lg">
              Loading
            </Container>
          </div>
          <div>
            <Container maxWidth="lg">
              This is info page
            </Container>
          </div>
        </>
      )
    }
    return (
      <>
        <div className="info-banner">
          <Container maxWidth="lg">
            <div className="info-hero-full-name">
              { hero.biography.fullName }
            </div>
            <div className="info-hero-name">
              { hero.name.toUpperCase() }
            </div>
          </Container>
        </div>
        <div className="info-content">
          <Container maxWidth="lg">
            <div className="info-hero-card">
            <HeroCard withImage={true} hero={hero}></HeroCard>
            </div>
            <InfoContent hero={hero}></InfoContent>
          </Container>
        </div>
      </>
    )
  }
}

export default withRouter(Info)