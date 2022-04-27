import { Component, h, Fragment, Prop } from '@stencil/core'
import { IChartData, IState } from 'interface'
import { state } from 'store'

@Component({
  tag: 'canoe-main',
  shadow: true,
})
export class CanoeMain {
  @Prop() data: IChartData[] = []
  @Prop() state: IState = state

  render() {
    return (
      <Fragment>
        <canoe-header class="bg-color"></canoe-header>
        <canoe-rank state={this.state}></canoe-rank>
        <xy-tab activekey="PRICE">
          <xy-tab-content label="PRICE" key="PRICE">
            <canoe-price state={this.state}></canoe-price>
            <canoe-chart data={this.data}></canoe-chart>
          </xy-tab-content>
          {/* <xy-tab-content label="INFO" key="INFO">
            Common Soon
          </xy-tab-content>
          <xy-tab-content label="NEWS" key="NEWS">
            Common Soon
          </xy-tab-content>
          <xy-tab-content label="SOCIAL" key="SOCIAL">
            Common Soon
          </xy-tab-content> */}
        </xy-tab>
        <token-swap></token-swap>
      </Fragment>
    )
  }
}
