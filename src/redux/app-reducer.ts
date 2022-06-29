import {headerAPI} from "../api/api";
import {Dispatch} from "redux";
import {authMe} from "./auth-reducer";

type SetUserAuthData = {
    type: 'INITIALIZED-SUCCESS'
}

export type AuthActionType = SetUserAuthData
export type AuthInitialStateType = {
    initialized: boolean
}
let initialState: AuthInitialStateType = {
    initialized: false
}


export const appReducer = (state: AuthInitialStateType = initialState, action: AuthActionType): AuthInitialStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializeAC = (): SetUserAuthData => {
    return {type: 'INITIALIZED-SUCCESS'}
}

export const initializeApp = () => (dispatch: Dispatch) => {
    dispatch(authMe() as any)
        .then(() => {dispatch(initializeAC())})
}

