import {combineReducers} from 'redux'
import noteReducers from './noteReducers'

const allReducers = combineReducers( {
  noteReducers
})
export default allReducers