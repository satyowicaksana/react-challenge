import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import HeroCard from '../components/HeroCard'
import InfoContent from '../components/InfoContent'
import InfoBanner from '../components/InfoBanner'
import { connect } from 'react-redux'
import { setHero } from '../store/actions'

import {
  withRouter
} from 'react-router-dom'
import './Info.css'

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    hero: state.hero
  }
}

const mapDispatchToProps = { setHero }

class Info extends Component {
  componentDidMount() {
    const { match } = this.props
    const id = match.params.slug.split('-')[0]
    console.log(id)
    fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
      .then(result => result.json())
      .then(result => {
        this.props.setHero(result)
        // bannerStyle.backgroundImage = this.state.hero.images.lg
        // console.log(this.state.hero)
        console.log(this.props.hero)
      })
      .catch(console.log)
  }
  render() {
    let { hero } = this.props
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
        <InfoBanner></InfoBanner>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Info))