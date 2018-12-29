import {Component} from "react";
import {Dimensions, StyleSheet, View,} from "react-native"
import React from "react";
import Canvas from "react-native-canvas"
import moment from 'moment'
import "@antv/f2/lib/geom/"
import "@antv/f2/lib/geom/adjust/"
import "@antv/f2/lib/coord/polar"
import "@antv/f2/lib/component/axis/circle"
import "@antv/f2/lib/scale/time-cat"
import "@antv/f2/lib/component/guide"
import Guide from "@antv/f2/lib/plugin/guide"
import Legend from "@antv/f2/lib/plugin/legend"
F2.Chart.plugins.register([Legend, Guide]);
import F2 from "@antv/f2/lib/core"
const { width,height } = Dimensions.get("window")
class Chart extends Component {

  handleCanvas = canvas => {
    if(!canvas)
      return
    const data = []
    for(let i=0;i<30;i++) {
      data.push({
        name: '命中率',
        x: moment().add(-i,'d').format("YYYY-MM-DD"),
        y: Math.round(Math.random()*100)
      })
      data.push({
        name: '吞吐率',
        x: moment().add(-i,'d').format("YYYY-MM-DD"),
        y: Math.round(Math.random()*100)
      })
      data.push({
        name: '成功率',
        x: moment().add(-i, 'd').format("YYYY-MM-DD"),
        y: Math.round(Math.random() * 100)
      })
    }
    const chart = new F2.Chart({
      el: canvas,
      width: width-40,
      height: width,
      padding: "auto"
    })
    chart.source(data, {
      'x': {
        type: 'timeCat',
        range: [0, 1],
        tickCount:3,
        mask: 'YYYY-MM-DD',
      },
    })
    chart.legend(true,{position:'bottom',itemGap: 20})
    chart.line().position('x*y').color('name')
    chart.render()
  }
  render() {
    return <Canvas ref={this.handleCanvas} />
  }

}

export default Chart