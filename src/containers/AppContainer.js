import {connect} from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    showEditForm: state.noteReducers.showEditForm,
    showAddForm: state.noteReducers.showAddForm
  }
}
const AppContainer = connect(mapStateToProps)(App)
export default AppContainer