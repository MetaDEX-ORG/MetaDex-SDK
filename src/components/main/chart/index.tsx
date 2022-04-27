import { Component, Prop, h, Watch } from '@stencil/core'
import { Chart, init } from 'klinecharts'

import { IChartData } from '../../../interface'

@Component({
  tag: 'canoe-chart',
  styleUrl: 'index.scss',
  shadow: true,
})
export class CanoeChart {
  @Prop() data: IChartData[]

  chartDom!: HTMLDivElement
  chart!: Chart

  @Watch('data')
  watchData(value: IChartData[]) {
    this.chart.applyNewData(value)
  }

  componentDidLoad() {
    this.chart = init(this.chartDom, {
      grid: {
        show: false,
      },
      yAxis: {
        show: false,
        width: 0,
      },
    })
  }

  render() {
    return <div class="chart" ref={el => (this.chartDom = el)}></div>
  }
}
