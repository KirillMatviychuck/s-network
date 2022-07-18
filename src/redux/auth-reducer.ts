import {headerAPI} from "../api/api";
import {AppThunkType} from "./store-redux";

const initialState: AuthInitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: AuthInitialStateType = initialState, action: AuthActionType): AuthInitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {...state, ...action.payload}
        default:
            return state;
    }
}

// Actions
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: 'AUTH/SET_USER_DATA', payload: {id, login, email, isAuth}} as const)

// Thunks
export const authMe = (): AppThunkType => async (dispatch) => {
    const data = await headerAPI.authMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean = false, setStatus: (message: string) =>
    void): AppThunkType =>
    async (dispatch) => {
        const data = await headerAPI.login(email, password, rememberMe)
        if (data.resultCode === 0) dispatch(authMe() as any)
        else setStatus(data.messages[0])
    }
export const logout = (): AppThunkType => async (dispatch) => {
    const data = await headerAPI.logout()
    if (data.resultCode === 0) dispatch(setAuthUserData(null, null, null, false))
}

// Types
export type AuthActionType =
    | ReturnType<typeof setAuthUserData>

export type AuthInitialStateType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}