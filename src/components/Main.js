import React from 'react'
import {store} from '../store'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {HeaderContainer} from '../containers/HeaderContainer'
import {FooterContainer} from '../containers/FooterContainer'
import {DashboardContainer} from '../containers/DashboardContainer'

export const Main = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return {
      showApp: false
    }
  },
  componentWillMount: function() {
    var _this = this
    store.subscribe(function() {
      console.log('ewrer!!!')
      var currentStore = store.getState()
      console.log(currentStore.appReducer.toJSON().showApp)
      if(_this.state.showApp) {
        return
      }
      var render = currentStore.appReducer.toJSON().showApp
      console.log(currentStore.appReducer.toJSON())
      if(render){
        _this.setState({
          showApp: render
        })
      }

    })
  },
  render: function() {
    console.log(this.props)
    return (
      <div className="window">
        { this.state.showApp ? <HeaderContainer /> : null }
        <div className="window-content">
          <div className="pane-group">

              { this.state.showApp ? <DashboardContainer /> : null }

            <div className="pane login">
              {this.props.children}
            </div>
          </div>
        </div>
        { this.state.showApp ? <FooterContainer /> : null }
      </div>
    )
  }
})
