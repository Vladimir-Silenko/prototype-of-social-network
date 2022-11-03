import { combineReducers, legacy_createStore as createStore } from "redux";
import ProfileReducer from './profile-reducer'
import DialogsReducer from './dialogs-reducer'
import NavbarReducer from './navbar-reducer'
import UsersReduser from "./users-reducer";
import authReducer from "./auth-reducer";
let reducers = combineReducers({
    profile: ProfileReducer,
    messages: DialogsReducer,
    navbar: NavbarReducer,
    users: UsersReduser,
    auth: authReducer,
})
let store = createStore(reducers)

window.store = store;

export default store