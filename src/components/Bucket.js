import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Bucket = React.createClass({

  mixins: [PureRenderMixin],
  render: function() {

    return(
      <div>
      <table className="noborder">
        <thead className="bgcolor">
          <tr>
            <th className="seedcenter" style={{width: 200}}> Upload File</th>
            <th className="seedcenter" style={{width: 200}}> Make Public</th>
          </tr>
        </thead>
        <tbody className="bgcolor">
          <tr className="seedcenter">
            <td><input ref="uploader" type="file" accept="*" onChange={() => this.props.uploadPicture(this.refs.uploader)} multiple></input>
            </td>
            <td className="seedcenter"> <button className="btn btn-primary" onClick={() => this.props.makePublic()}>Upload Key</button></td>
          </tr>
        </tbody>
      </table>


        <div className="table-scroll-files">      
          <table className="table-striped-files">
          <thead>
            <tr>
              <th style={{width: 70}}>File Id</th>
              <th style={{width: 110}}>File Name</th>
              <th style={{width: 150}}>Size</th>
            </tr>
          </thead>
            <tbody>
              {this.props.pictures}
            </tbody>
          </table>
        </div>
        <h1 className="seedcenter">{this.props.params.value}</h1>
      </div> 
    )
  }
})
