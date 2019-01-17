import React, { Component } from 'react';
import {connect} from 'react-redux'
class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ediItemKey: '',
      editData: {}
    }
  }
  deleteNote = (key) => {    
    const canDel = window.confirm('Are you sure?');
    if(canDel) {
      this.props.deleteNote(this.props.id);
    }
  }
  render() {
      
    return (
        <div className="card">
          <div className="card-header" role="tab" id={this.props.id}>
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent={'#' + this.props.id} href={'#' + this.props.id + '-content'} aria-expanded="true" aria-controls={this.props.id + '-content'}>
                {this.props.title}
              </a>

              <div className="btn-group justify-align-right" role="group" aria-label=""  style={{float: 'right'}}>

               <div className="btn-group">
                <button type="button" className="btn btn-primary" onClick={() => {this.props.changeState(this.props.id, this.props.title, this.props.content)}}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={this.deleteNote}>Delete</button>
              </div>

              </div>
            </h5>
          </div>
          <div id={this.props.id + '-content'} className="collapse in" role="tabpanel" aria-labelledby={this.props.id + '-content'}>
            <div className="card-body">
              <p>{this.props.content}</p>
            </div>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.prop,
    editNoteKey: '',
    editNoteData: {}
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeState: (key, title, content) => {
      dispatch({type:'SHOW_EDIT_FORM', editKey: key, editTitle: title, editContent:content});
    },
    deleteNote:  (key) => {
      dispatch({type:'DELETE', itemKey: key});
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps )(NoteItem) 
