import React, {Component} from 'react';
import {Radar, defaults} from 'react-chartjs-2';

defaults.global.defaultFontColor = '#61DAFB';
defaults.global.defaultFontFamily = 'Russo One';
defaults.global.defaultFontSize = 10;

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
    console.log(defaults.global)
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <Radar
        data={this.state.chartData}
        options={{
          legend:{
            display: null,
            position:this.props.legendPosition,
            fontSize:40
          }
        }}
      />
    )
  }
}

export default Chart;