import {connect} from 'react-redux';
import AddFormComponent from '../components/AddformComponent'
import {addNewNote} from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickAdd: (data) => {
      dispatch(addNewNote(data))
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  }
}
const AddFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddFormComponent);
export default AddFormContainer