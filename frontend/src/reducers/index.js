import { combineReducers } from 'redux'
import loadingReducer from './isLoading'
import itemsReducer from './setItems'
import itemReducer from './setItem'

const allReducers = combineReducers({
    loading: loadingReducer,
    items: itemsReducer,
    item: itemReducer
})
export default allReducers