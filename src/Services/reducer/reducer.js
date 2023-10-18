import { combineReducers } from 'redux'
import { Auth_reducer } from './auth_reducer'
import { GetCategoryReducer } from './GetCategoryReducer'
import { GetBrandsReducer } from './GetBrandsReducer'
import { GetCollectionsReducer } from './GetCollectionsReducer'
import { GetGendersReducer } from './GetGendersReducer'
import { GetForAgeReducer } from './GetForAgeReducer'
import { GetPlatformsReducer } from './GetPlatformsReducer'

export default combineReducers({
    Auth_reducer,
    getCategory: GetCategoryReducer,
    getBrand: GetBrandsReducer,
    getCollections: GetCollectionsReducer,
    getGender: GetGendersReducer,
    getForAge: GetForAgeReducer,
    getPlatfors: GetPlatformsReducer,
})
