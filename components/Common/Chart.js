import {Component} from "react"
import {Dimensions, StyleSheet, View,} from "react-native"
import React from "react"
import moment from 'moment'
import {VictoryChart,VictoryAxis,VictoryLabel,VictoryBar,VictoryLine,VictoryTheme} from "victory-native"
const { width,height } = Dimensions.get("window")
class Chart extends Component {

  static defaultProps = {
    data: [],
  };

  render() {

    return <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
      <VictoryAxis
        scale="time"
        tickCount={4}
        tickLabelComponent={<VictoryLabel angle={-20}/>}
        tickFormat={ x =>  moment(x).format('YYYY-MM-DD')}
      />
      <VictoryAxis dependentAxis offsetX={50} orientation="left"/>
      <VictoryBar
        style={{ data: { fill: "#1890ff"} }}
        data={this.props.data}
      />
    </VictoryChart>
  }

}

export default Chart