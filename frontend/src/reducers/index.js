import { combineReducers } from 'redux'
import loadingReducer from './isLoading'
import itemsReducer from './setItems'
import itemReducer from './setItem'
import pageReducer from './pageState'

const allReducers = combineReducers({
    loading: loadingReducer,
    items: itemsReducer,
    item: itemReducer,
    page: pageReducer
})
export default allReducers