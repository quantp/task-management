import {connect} from 'react-redux';
import EditFormComponent from '../components/EditFormComponent'
import {updateNote} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    id: state.noteReducers.editKey,
    title: state.noteReducers.editTitle,
    content: state.noteReducers.editContent
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateNote: (key, title, content) => {
      dispatch(updateNote(key, {title: title, content: content}));
    }
  }
}
const EditFormContainer = connect(mapStateToProps, mapDispatchToProps)(EditFormComponent);
export default EditFormContainer