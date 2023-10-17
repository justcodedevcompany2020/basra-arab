import { combineReducers } from 'redux'
import { Auth_reducer } from './auth_reducer'
import { GetCategoryReducer } from './GetCategoryReducer'
import { GetBrandsReducer } from './GetBrandsReducer'

export default combineReducers({
    Auth_reducer,
    getCategory: GetCategoryReducer,
    getBrand: GetBrandsReducer
})
