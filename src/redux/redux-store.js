import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import ProfileReducer from './profile-reducer'
import DialogsReducer from './dialogs-reducer'
import NavbarReducer from './navbar-reducer'
import UsersReduser from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk' // additional slice to run thunk
import { reducer as formReducer } from 'redux-form'
import { appReducer } from "./app-reducer";
let reducers = combineReducers({
    profile: ProfileReducer,
    messages: DialogsReducer,
    navbar: NavbarReducer,
    users: UsersReduser,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store