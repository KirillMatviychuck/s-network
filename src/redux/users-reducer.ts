import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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
type FollowType = {
    type: 'FOLLOW-USER'
    userId: number
}
type UnfollowType = {
    type: 'UNFOLLOW-USER'
    userId: number
}
type SetUsersType = {
    type: 'SET-USERS'
    users: Array<UsersType>
}
type SetCurrentPageType = {
    type: 'SET-CURRENT-PAGE'
    pageNumber: number
}
type ToggleIsFetchingType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}
type ChangeToggleProgressType = {
    type: 'CHANGE-TOGGLE-PROGRESS'
    status: boolean
    userId: number
}
export type UsersActionType =
    FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | ToggleIsFetchingType
    | ChangeToggleProgressType

let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 32,
    currentPage: 1,
    isFetching: false,
    toggleInProgress: []
}


export const usersReducer = (state: UsersInitialStateType = initialState, action: UsersActionType): UsersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW-USER':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW-USER':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.pageNumber}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'CHANGE-TOGGLE-PROGRESS':
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
export const followSuccess = (userId: number): FollowType => {
    return {type: 'FOLLOW-USER', userId}
}
export const unfollowSuccess = (userId: number): UnfollowType => {
    return {type: 'UNFOLLOW-USER', userId}
}
export const setUsers = (users: Array<UsersType>): SetUsersType => {
    return {type: 'SET-USERS', users}
}
export const setCurrentPage = (pageNumber: number) => {
    return {type: 'SET-CURRENT-PAGE', pageNumber}
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching}
}
export const changeToggleProgress = (status: boolean, userId: number) => {
    return {type: 'CHANGE-TOGGLE-PROGRESS', status, userId}
}

// Thunk creators
export const getUsers = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(pageSize, currentPage).then(data => {
        dispatch(setCurrentPage(currentPage))
        dispatch(setUsers(data.items))
        dispatch(toggleIsFetching(false))
    })
}
export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(changeToggleProgress(true, userId))
    usersAPI.followUser(userId)
        .then(data => {
            if (data.resultCode === 0) dispatch(followSuccess(userId))
            dispatch(changeToggleProgress(false, userId))
        })
}
export const unfollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(changeToggleProgress(true, userId))
    usersAPI.unfollowUser(userId)
        .then(data => {
            if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
            dispatch(changeToggleProgress(false, userId))
        })
}


export default usersReducer;