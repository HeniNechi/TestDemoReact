import React, { Component } from 'react'

 class Filter extends Component {
    render() {
        
        return (
            <div>
               <div className="row"></div>
                <select class="mdb-select md-form form-control" value={this.props.categories} onChange={this.props.handleChangeCategory} multiple>
            <option value="" disabled selected>Choose a Category</option>
            <option value="" >{this.props.categories[1]}</option>
                   <option value="">{this.props.categories[2]}</option>
                   <option value="">{this.props.categories[3]}</option>
                   <option value="">{this.props.categories[4]}</option>
          </select>
          <button class="btn-save btn btn-primary btn-sm">Save</button>
          </div>
        )
    }
}
export default Filter