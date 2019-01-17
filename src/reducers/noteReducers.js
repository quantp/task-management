import {SHOW_ADD_FORM, ADD_NEW_NOTE, SHOW_EDIT_FORM, UPDATE_NOTE, DELETE_NOTE} from '../actions/actionTypes'
import noteData from '../api/firebase';

let noteInitialState = {
  showAddForm: false,
  showEditForm: false,
  editKey: '',
  editTitle: '',
  editContent: '',
  itemKey: '',
  noteList: []
}

const noteReducers = (state = noteInitialState, action) => {
  switch (action.type) {
    case SHOW_ADD_FORM:      
      return  {...state, showAddForm: true, showEditForm: false}
    case SHOW_EDIT_FORM:      
      return  {...state, showEditForm: true, showAddForm: false, editKey: action.key, editTitle: action.title, editContent: action.content}
    case ADD_NEW_NOTE:
      noteData.push(action.data).then(function() {
        alert('Note added successfully.');
      }).catch(function(er) {
        alert(`Note could not be added. ${er}`);
      })
      return state; 
    case UPDATE_NOTE:      
      noteData.child(action.key).update(action.data).then(function() {
        alert('Note updated successfully.');
      }).catch(function(er) {
        alert(`Data could not be updated. ${er}`);
      })
      return state;
    case DELETE_NOTE:
      noteData.child(action.key).remove().then(function() {
        alert('Note removed successfully.');
      }).catch(function(er) {
        alert(`Data could not be removed. ${er}`);
      });
      return state;
    default:
      return state;
  }
}
export default noteReducers