import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {AppThunkType} from "./store-redux";

let initialState: ProfileInitialStateType = {
    posts: [
        {id: v1(), post: 'my first post', likesCount: 5},
        {id: v1(), post: 'nice I believe not last lol', likesCount: 17},
        {id: v1(), post: 'I am believe in it too', likesCount: 6},
        {id: v1(), post: 'What interesting movie do you know?', likesCount: 5},
    ],
    newPostText: '',
    profile: null,
    status: ""
}

const profileReducer = (state: ProfileInitialStateType = initialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case 'PROFILE/ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: v1(), post: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
        case 'PROFILE/UPDATE-NEW-POST-TEXT':
            return { ...state, newPostText: action.newText }
        case 'PROFILE/SET-USER-PROFILE-TYPE':
            return {...state, profile: action.profile}
        case 'PROFILE/SET-USER-STATUS':
            return {...state, status: action.status}
        default:
            return state;
    }
}

// Actions
export const addPostAC = () => ({type: 'PROFILE/ADD-POST'} as const)
export const updateNewPostTextAC = (text: string) => ({type: 'PROFILE/UPDATE-NEW-POST-TEXT', newText: text} as const)
export const userProfileAC = (profile: UserProfileType) => ({type: 'PROFILE/SET-USER-PROFILE-TYPE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'PROFILE/SET-USER-STATUS', status} as const)

// Thunks
export const setUserProfile = (userId: number): AppThunkType => async (dispatch) => {
    const data = await profileAPI.currentUserProfile(userId)
    dispatch(userProfileAC(data))
}
export const getUserStatus = (userId: string): AppThunkType => async (dispatch) => {
    const data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data))
}
export const updateStatus = (status: string): AppThunkType => async (dispatch) => {
    await profileAPI.updateStatus(status)
    dispatch(setUserStatus(status))
}

//Types
type UserProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type UserProfileType = {
    aboutMe: string
    contacts: UserProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}
export type ProfileInitialStateType = {
    posts: Array<{ id: string, post: string, likesCount: number }>
    newPostText: string
    profile: UserProfileType | null
    status: string
}
export type ProfileActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof userProfileAC>
    | ReturnType<typeof setUserStatus>


export default profileReducer;