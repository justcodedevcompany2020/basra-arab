import { combineReducers } from 'redux'
import { Auth_reducer } from './auth_reducer'
import { GetCategoryReducer } from './GetCategoryReducer'
import { GetBrandsReducer } from './GetBrandsReducer'
import { GetCollectionsReducer } from './GetCollectionsReducer'
import { GetGendersReducer } from './GetGendersReducer'
import { GetForAgeReducer } from './GetForAgeReducer'
import { GetPlatformsReducer } from './GetPlatformsReducer'
import { CreateProductReducet } from './CreateProductReducet'
import { GetAllProductsReducer } from './GetProductsReducer'
import { GetSinglProductReducer } from './GetSinglProductReducer'
import { UpdateProductReducer } from './UpdateProductReducer'
import { CreateStoryTeamReducer } from './CreateStoryTeamReducer'
import { GetStoryTeamReducer } from './GetStoryTeamReducer'
import { GetSinglStoryReducer } from './GetSinglStoryReducer'
import { EditStoryOrderReducer } from './EditStoryOrderReducer'
import { GetSliderRderucer } from './GetSliderRderucer'
import { ChatRoomReducer } from './ChatRoomReducer'
import { GetSinglPageChatRoomReducer } from './GetSinglPageChatRoomReducer'
import { AddMsgReducer } from './AddMsgReducer'


export default combineReducers({
    Auth_reducer,
    getCategory: GetCategoryReducer,
    getBrand: GetBrandsReducer,
    getCollections: GetCollectionsReducer,
    getGender: GetGendersReducer,
    getForAge: GetForAgeReducer,
    getPlatfors: GetPlatformsReducer,
    createProduct: CreateProductReducet,
    getProducts: GetAllProductsReducer,
    getSinglProduct: GetSinglProductReducer,
    updateProduct: UpdateProductReducer,
    createStoryTeam: CreateStoryTeamReducer,
    getStoryTeam: GetStoryTeamReducer,
    getSinglStory: GetSinglStoryReducer,
    editStoryOrder: EditStoryOrderReducer,
    getSlider: GetSliderRderucer,
    chatRoom: ChatRoomReducer,
    getSinglChat: GetSinglPageChatRoomReducer,
    addMsg: AddMsgReducer,
})
