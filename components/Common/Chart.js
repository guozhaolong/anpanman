import {Component} from "react"
import React from "react"
import moment from 'moment'
import _ from 'lodash'
import {VictoryChart,VictoryAxis,VictoryLabel,VictoryBar,VictoryLegend,VictoryLine,VictoryTheme} from "victory-native"

class Chart extends Component {

  static defaultProps = {
    data: [],
    colors: ['#1890FF', '#52C41A', '#FAAD14', '#F5222D', '#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399'],
  }

  render() {
    let sorted = {}
    if(this.props.data.length > 0)
      sorted = _.groupBy(this.props.data.map(d => {return {...d,x:moment(d.x,'YYYY-MM-DD')}}),'name')
    const series = _.keys(sorted)
    return <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
      <VictoryAxis
        scale='time'
        tickCount={4}
        tickLabelComponent={<VictoryLabel angle={-20}/>}
        tickFormat={ x =>  moment(x).format('YYYY-MM-DD')}
      />
      <VictoryAxis dependentAxis offsetX={50} orientation="left"/>
      <VictoryLegend x={130} y={0}
                     orientation="horizontal"
                     style={{  title: {fontSize: 20 } }}
                     data={series.map((s,i) => {return { name: s, symbol: { fill: this.props.colors[i%9] }}})}/>
      {
        series.map((s,i) => {
          const v = sorted[s].length > 1?sorted[s]:[{ x: new Date(), y: 0 },{ x: new Date(), y: 0 }]
          return <VictoryLine key={i+""} data={v} interpolation="cardinal" style={{ data: { stroke: this.props.colors[i%9]}}}/>
        })
      }

    </VictoryChart>
  }

}

export default Chart