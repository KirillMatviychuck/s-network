import {headerAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA'

type SetUserAuthData = {
    type: 'SET_USER_DATA'
    payload: AuthInitialStateType
}

export type AuthActionType = SetUserAuthData
export type AuthInitialStateType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}
let initialState: AuthInitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


export const authReducer = (state: AuthInitialStateType = initialState, action: AuthActionType): AuthInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetUserAuthData => {
    return {type: 'SET_USER_DATA', payload: {id, login, email, isAuth}}
}

export const authMe = () => (dispatch: Dispatch) => {
    headerAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean = false) => (dispatch: Dispatch) => {
    headerAPI.login(email,password, rememberMe)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(authMe() as any)
            }
        })
}
export const logout = () => (dispatch: Dispatch) => {
    headerAPI.logout()
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
