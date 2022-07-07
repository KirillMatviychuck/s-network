import {authMe} from "./auth-reducer";
import {AppThunkType} from "./store-redux";

const initialState = {
    initialized: false
}

export const appReducer = (state: AuthInitialStateType = initialState, action: AppReduceActionType): AuthInitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED-SUCCESS':
            return {...state, initialized: true}
        default:
            return state;
    }
}

//actions
export const initializeAC = () => ({type: 'APP/INITIALIZED-SUCCESS'} as const)

//thunks
export const initializeApp = (): AppThunkType => async (dispatch) => {
    await dispatch(authMe())
    dispatch(initializeAC())
}

//types
export type AuthInitialStateType = typeof initialState
export type AppReduceActionType =
    | ReturnType<typeof initializeAC>

