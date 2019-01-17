import {connect} from 'react-redux'
import Nav from '../components/NavComponent'
import {showAddForm} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickShow: () => {
      dispatch(showAddForm())
    }
  }
}
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)
export default NavContainer