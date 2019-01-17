import noteData from './components/firebase';

var redux = require('redux');
const noteInitialState = {
    isEdit: false,
    editKey: '',
    editTitle: '',
    editContent: '',
    itemKey: '',
    showAddForm: false
};
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "SHOW_ADD_FORM":
            return {...state, showAddForm: !state.showAddForm};
        case "ADD":
            noteData.push(action.items);         
            return state
        case "SHOW_EDIT_FORM":
            return {...state,isEdit: !state.isEdit, editKey: action.editKey, editTitle: action.editTitle, editContent: action.editContent};
        case "SAVE_USER":
            noteData.child(state.editKey).update(action.pushData);           
            return state;
        case "DELETE":
            noteData.child(action.itemKey).remove();
            return state;  
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;