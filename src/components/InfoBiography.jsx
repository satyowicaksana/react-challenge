import React from 'react'
import Grid from '@material-ui/core/Grid'
import TitleBadge from './TitleBadge'
import './InfoBiography.css'

export default (props) => {
  const { hero } = props
  return (
    <>
      <div>
      <TitleBadge title={'BIOGRAPHY'}></TitleBadge>
      </div>
      <Grid className="biography-container" container>
        <Grid item lg={3} md={3} xs={3}>
          Full Name
        </Grid>
        <Grid item lg={9} md={9} xs={9}>
          : {hero.biography.fullName}
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          Aliases
        </Grid>
        <Grid item lg={9} md={9} xs={9}>
          : {hero.biography.aliases.join(', ')}
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          Alignment
        </Grid>
        <Grid item lg={9} md={9} xs={9}>
          : {hero.biography.alignment === 'good' ? 'HERO' : 'VILLAIN'}
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          Birth Place
        </Grid>
        <Grid item lg={9} md={9} xs={9}>
          : {hero.biography.placeOfBirth}
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          Race
        </Grid>
        <Grid item lg={9} md={9} xs={9}>
          : {hero.appearance.race}
        </Grid>
      </Grid>
    </>
  )
}