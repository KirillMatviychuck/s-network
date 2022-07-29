import {usersAPI} from "../api/api";
import {AppThunk} from "../store/store-redux";

const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 8,
    totalUsersCount: 400,
    currentPage: 1,
    isFetching: false,
    toggleInProgress: []
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: UsersActionType): UsersInitialStateType => {
    switch (action.type) {
        case 'USERS/FOLLOW-USER':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'USERS/UNFOLLOW-USER':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'USERS/SET-USERS':
            return {...state, users: [...action.users]}
        case 'USERS/SET-CURRENT-PAGE':
            return {...state, currentPage: action.pageNumber}
        case 'USERS/TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'USERS/CHANGE-TOGGLE-PROGRESS':
            return {
                ...state,
                toggleInProgress: action.status
                    ? [...state.toggleInProgress, action.userId]
                    : state.toggleInProgress.filter(u => u !== action.userId)
            }
        default:
            return state;
    }
}

// Action creators
export const followSuccess = (userId: number) => ({type: 'USERS/FOLLOW-USER', userId} as const)
export const unfollowSuccess = (userId: number) => ({type: 'USERS/UNFOLLOW-USER', userId} as const)
export const setUsers = (users: Array<UsersType>) => ({type: 'USERS/SET-USERS', users} as const)
export const setCurrentPage = (pageNumber: number) => ({type: 'USERS/SET-CURRENT-PAGE', pageNumber} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'USERS/TOGGLE-IS-FETCHING', isFetching} as const)
export const changeToggleProgress = (status: boolean, userId: number) =>
    ({type: 'USERS/CHANGE-TOGGLE-PROGRESS', status, userId} as const)

// Thunk creators
export const getUsers = (pageSize: number, currentPage: number): AppThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await usersAPI.getUsers(pageSize, currentPage)
    dispatch(setCurrentPage(currentPage))
    dispatch(setUsers(data.items))
    dispatch(toggleIsFetching(false))
}
export const follow = (userId: number): AppThunk => async (dispatch) => {
    dispatch(changeToggleProgress(true, userId))
    const data = await usersAPI.followUser(userId)
    if (data.resultCode === 0) dispatch(followSuccess(userId))
    dispatch(changeToggleProgress(false, userId))
}
export const unfollow = (userId: number): AppThunk => async (dispatch) => {
    dispatch(changeToggleProgress(true, userId))
    const data = await usersAPI.unfollowUser(userId)
    if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
    dispatch(changeToggleProgress(false, userId))
}

export type UsersInitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleInProgress: Array<number>
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: { small: string | null, large: string | null }
    status: null | string
    followed: boolean
}
export type UsersActionType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof changeToggleProgress>

export default usersReducer;