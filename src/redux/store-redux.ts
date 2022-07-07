import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profile-reducer";
import dialogsReducer, {DialogsActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {UsersActionType} from "./users-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {appReducer, AppReduceActionType} from "./app-reducer";
import {ThunkAction} from 'redux-thunk'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarPage: sidebarReducer,
    authorization: authReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStoreType = ReturnType<typeof rootReducer>
export type AppActionType =
    | UsersActionType
    | ProfileActionType
    | DialogsActionType
    | AppReduceActionType
    | AuthActionType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActionType>

// @ts-ignore
window.store = store

