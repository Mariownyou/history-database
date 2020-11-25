import { combineReducers } from 'redux'
import loadingReducer from './isLoading'
import itemsReducer from './setItems'
import itemReducer from './setItem'
import pageReducer from './pageState'
import openReducer from './isOpen'
import yearsReducer from './setYears'
import yearReducer from './setYear'

const allReducers = combineReducers({
    loading: loadingReducer,
    items: itemsReducer,
    item: itemReducer,
    page: pageReducer,
    open: openReducer,
    year: yearReducer,
    years: yearsReducer
})
export default allReducers