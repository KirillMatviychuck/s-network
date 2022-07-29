import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionType} from "../redux/profile-reducer";
import dialogsReducer, {DialogsActionType} from "../redux/dialogs-reducer";
import sidebarReducer from "../redux/sidebar-reducer";
import usersReducer, {UsersActionType} from "../redux/users-reducer";
import {AuthActionType, authReducer} from "../redux/auth-reducer";
import thunkMiddleware from "redux-thunk"
import {appReducer, AppReduceActionType} from "../redux/app-reducer";
import {ThunkAction, ThunkDispatch} from 'redux-thunk'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarPage: sidebarReducer,
    authorization: authReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionType =
    | UsersActionType
    | ProfileActionType
    | DialogsActionType
    | AppReduceActionType
    | AuthActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionType>

// @ts-ignore
window.store = store

