import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Bucket = React.createClass({

  mixins: [PureRenderMixin],
  render: function() {

    return(
      <div>
      {this.props.renderPics(this.props.params.value)}
      <table className="">
        <thead className="bgcolor">
          <tr>
            <th className="theader" > Upload File</th>
            <th  className="seedcenter"> Make Public</th>
          </tr>
        </thead>
        <tbody className="bgcolor">
          <tr className="seedcenter">
            <td><input ref="uploader" type="file" accept="*" onChange={() => this.props.uploadPicture(this.refs.uploader, this.props.params.value)} multiple></input>
            </td>
            <td className="seedcenter"> <button className="btn btn-primary" onClick={() => this.props.makePublic(this.props.params.value)}>Upload Key</button></td>
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
      </div> 
    )
  }
})
