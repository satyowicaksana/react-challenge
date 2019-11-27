import React, {Component} from 'react';
import {Radar, defaults} from 'react-chartjs-2';

defaults.global.defaultFontColor = '#61DAFB';
defaults.global.defaultFontFamily = 'Russo One';
defaults.global.defaultFontSize = 10;

class Chart extends Component{
  static defaultProps = {
    displayTitle:true
  }

  render(){
    return (
      <Radar
        data={this.props.chartData}
        options={{
          title:{
            display:this.props.displayTitle,
            text: 'Enhanced Ability Evaluation',
            fontSize:20
          },
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