import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import InfoAppearance from './InfoAppearance'
import InfoBiography from './InfoBiography'
import InfoPower from './InfoPower'
import './InfoContent.css'
import Chart from './Chart'
class InfoContent extends Component {
  getChartData = () => {
    const { hero } = this.props
    // Ajax calls here
    return {
        labels: ['COMBAT', 'DURABILITY', 'INTELLIGENCE', 'POWER', 'SPEED', 'STRENGTH'],
        datasets:[
          {
            label:'Stat',
            data:[
              hero.powerstats.combat,
              hero.powerstats.durability,
              hero.powerstats.intelligence,
              hero.powerstats.power,
              hero.powerstats.speed,
              hero.powerstats.strength
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
  }

  render() {
    const { hero } = this.props
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <InfoAppearance hero={hero}></InfoAppearance>
          </Grid>
          <Grid item lg={4}>
            <InfoBiography hero={hero}></InfoBiography>
          </Grid>
          <Grid item lg={4}>
            <InfoPower hero={hero}></InfoPower>
          </Grid>
        </Grid>
        <div className="chart-container">
        <Chart chartData={this.getChartData()} location="Massachusetts" legendPosition="bottom"/>
        </div>
      </div>
    )
  }
}

export default InfoContent