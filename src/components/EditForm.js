import React, { Component } from 'react'
import {connect} from 'react-redux';
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  onChangeHandler = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val
    });
  }
  render() {
    return (
        <div>
        <h3>Edit Note</h3>
        <div className="form-group">
          <label htmlFor="note-title">Note Title</label>
          <input onChange={this.onChangeHandler} type="text" className="form-control" name="title" id="note-title" aria-describedby="note-title" placeholder="Note Title" defaultValue={this.props.title}/>
          <small id="note-title" className="form-text text-muted">Input Text</small>
        </div>
        <div className="form-group">
          <label htmlFor="note-content">Note Content</label>
          <textarea onChange={this.onChangeHandler} className="form-control" name="content" id="note-content" rows={3} defaultValue={this.props.content} />
        </div>
        <button type="submit" className="btn btn-primary btn-block"onClick={() => {this.props.saveUser(this.state.title, this.state.content)}}>Save</button>
        </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    title: state.editTitle,
    content: state.editContent
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveUser: (title, content) => {
      dispatch({type: 'SAVE_USER', pushData: {title: title, content: content}});
    },
    addUser: (noteItems) => {
      dispatch({type: 'ADD', items: noteItems});
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);