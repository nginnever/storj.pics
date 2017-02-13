import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Home = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return(
      <h1 className="seedcenter"> Welcome to Storj Pics!! </h1>
    )
  }
})
