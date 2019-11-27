import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import HeroCard from '../components/HeroCard'
import InfoContent from '../components/InfoContent'
import InfoBanner from '../components/InfoBanner'
import { connect } from 'react-redux'
import { fetchHero } from '../store/actions'

import {
  withRouter
} from 'react-router-dom'
import './Info.css'

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    hero: state.hero
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHero(id) {
      dispatch(fetchHero(id))
    }
  }
}

class Info extends Component {
  componentDidMount() {
    const { match } = this.props
    const id = match.params.slug.split('-')[0]
    this.props.fetchHero(id)
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