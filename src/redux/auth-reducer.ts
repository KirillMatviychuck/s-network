import {headerAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA'

type SetUserAuthData = {
    type: 'SET_USER_DATA'
    data: AuthInitialStateType
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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number, login: string, email: string) => {
    return {type: 'SET_USER_DATA', data: {id, login, email}}
}

export const authMe = () => (dispatch: Dispatch) => {
    headerAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}
