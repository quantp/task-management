import React, {Component} from 'react'
import {connect} from 'react-redux'
class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor: '#000'}}>
        <a className="navbar-brand" href="#1"><img src="../img/logo.png" alt="Logo"></img></a>
        <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#2">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#3" onClick={this.props.showAddForm}>Add New Note</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showAddForm: () => {
      dispatch({type: 'SHOW_ADD_FORM'})
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)