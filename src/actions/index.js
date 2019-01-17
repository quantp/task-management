import {SHOW_ADD_FORM, ADD_NEW_NOTE, SHOW_EDIT_FORM, UPDATE_NOTE, DELETE_NOTE} from './actionTypes'

// Action: show add form
export const showAddForm = () => {
  return {
    type: SHOW_ADD_FORM 
  }
}
//Action: add new NOTE
export const addNewNote = (data) => {
  return {
    type: ADD_NEW_NOTE,
    data
  }
}
// Action: show edit form
export const showEditForm = (key, title, content) => {
  return {
    type: SHOW_EDIT_FORM,
    key,
    title,
    content
  }
}
// Action: update NOTE
export const updateNote = (key, data) => {
  return {
    type: UPDATE_NOTE,
    key,
    data
  }
}
// Action: delete NOTE
export const deleteNote = (key) => {
  return {
    type: DELETE_NOTE,
    key
  }
}
