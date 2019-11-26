import React from 'react'
import Grid from '@material-ui/core/Grid'
import TitleBadge from './TitleBadge'

export default (props) => {
  const { hero } = props
  return (
    <>
      <div>
      <TitleBadge title={'APPEARANCE'}></TitleBadge>
      </div>
      <Grid container>
        <Grid item lg={3}>
          Eye Color
        </Grid>
        <Grid item lg={9}>
          : {hero.appearance.eyeColor}
        </Grid>
        <Grid item lg={3}>
          Gender
        </Grid>
        <Grid item lg={9}>
          : {hero.appearance.gender}
        </Grid>
        <Grid item lg={3}>
          Hair Color
        </Grid>
        <Grid item lg={9}>
          : {hero.appearance.hairColor}
        </Grid>
        <Grid item lg={3}>
          Height
        </Grid>
        <Grid item lg={9}>
          : {hero.appearance.height.join(' / ')}
        </Grid>
        <Grid item lg={3}>
          Weight
        </Grid>
        <Grid item lg={9}>
          : {hero.appearance.weight.join(' / ')}
        </Grid>
      </Grid>
    </>
  )
}