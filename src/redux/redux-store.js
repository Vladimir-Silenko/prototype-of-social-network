import { combineReducers, legacy_createStore as createStore } from "redux";
import ProfileReducer from './profile-reducer'
import DialogsReducer from './dialogs-reducer'
import NavbarReducer from './navbar-reducer'
let reducers = combineReducers({
    profile: ProfileReducer,
    messages: DialogsReducer,
    navbar: NavbarReducer,
})
let store = createStore(reducers)

export default store