import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import InfoSection from './InfoSection'
class InfoContent extends Component {
  render() {
    const { hero } = this.props
    return (
      <div>
        <Grid container>
          <Grid item lg={4}>
            <InfoSection hero={hero}></InfoSection>
          </Grid>
          <Grid item lg={8}>
            BIOGRAPHY
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default InfoContent