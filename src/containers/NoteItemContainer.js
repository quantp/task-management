import {connect} from 'react-redux';
import NoteItemComponent from '../components/NoteItemComponent'
import {deleteNote, showEditForm} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showEditForm: (key, title, content) => {
      dispatch(showEditForm(key, title, content));
    },
    deleteNote:  (key) => {
      dispatch(deleteNote(key));
    }
  }
}
const NoteItemContainer = connect(mapStateToProps, mapDispatchToProps)(NoteItemComponent);
export default NoteItemContainer