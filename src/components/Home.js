import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Home = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return(
      <div>
      <h2 className="seedcenter"> Welcome to Storj Pics </h2>
      <p className="seedcenter">Encrypted p2p photo storage and sharing!</p>
      <h5 className="seedcenter"> 
      Currently all photos are public and the keys are stored<br/>
      on the storj bridge client. Soon this app will save encryption<br/>
      keys in the browser so only you and who you share your keys with<br/>
      can see them.
       </h5>
      </div>
    )
  }
})
