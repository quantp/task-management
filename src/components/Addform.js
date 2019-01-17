import React, { Component } from 'react';
import {connect} from 'react-redux';

class Addform extends Component {
  onChangeHandler = (ev) => {
    const name = ev.target.name,
          val = ev.target.value;
    this.setState({
      [name]: val
    });
  }
  render() {
    return (
        <div>
        <h3>Add Note</h3>
        <div className="form-group">
          <label htmlFor="note-title">Note Title</label>
          <input onChange={this.onChangeHandler} type="text" className="form-control" name="title" id="note-title" aria-describedby="note-title" placeholder="Note Title" />
          <small id="note-title" className="form-text text-muted">Input Text</small>
        </div>
        <div className="form-group">
          <label htmlFor="note-content">Note Content</label>
          <textarea onChange={this.onChangeHandler} className="form-control" name="content" id="note-content" rows={3} defaultValue={""} />
        </div>
        <button type="submit" className="btn btn-primary btn-block"onClick={() => {this.props.addUser(this.state)}}>Save</button>
        </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    message: state.testMessage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUser: (noteItems) => {
      dispatch({type: 'ADD', items: noteItems});
    }
  }
}
// this.props.dispatch1
export default connect(mapStateToProps, mapDispatchToProps)(Addform);