import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Modal from 'react-modal'

export const Header = React.createClass({
  mixins: [PureRenderMixin],
	render: function() {
		console.log('header render active account: ' + this.props.activeAccount)
		console.log(this.props.options)
		return(
			<header className="toolbar toolbar-header" style={{flexDirection:'row' }}>
			    <img src={'NGinnever_Just_Will_It_Logo.svg'} style={{height: 25, marginTop: 12, marginLeft: 5, marginRight: 0}} />
			  <div className="toolbar-actions" style={{marginLeft: 150, marginTop: -35}}>

			    <div className="btn-group">
			      <button className="btn btn-default">
			        <span className="icon icon-home"></span>
			      </button>
			      <button className="btn btn-default">
			        <span className="icon icon-book"></span>
			      </button>
			    </div>

			    <button className="btn btn-default pull-right" onClick={this.props.openAccounts}>
			      <span className="icon icon-user pull-right"></span>
			    </button>
			    <Modal className="accounts-modal pull-right"
			      style={this.props.customModalStyles}
			      isOpen={this.props.isOpenAccounts}
			      onRequestClose={this.props.closeAccounts}>

				    <select id="accselect" ref="ctype" style={{height: 31, marginTop: -1}} className="pull-right" onChange={() => this.props.selectAcc(this.refs.ctype)}>
				      {this.props.options}
				    </select>
			    </Modal>

			    <button className="btn btn-default pull-right">
			      
			      ID Balance: Ξ{this.props.balance[0] + '.' + this.props.balance[1] + this.props.balance[2]}
			    </button>
			  </div>
			</header>
		)
	}
})