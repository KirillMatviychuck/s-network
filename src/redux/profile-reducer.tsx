import {v1} from "uuid";

type PostsType = {
    id: string
    post: string
    likesCount: number
}
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
        small: string
        large: string
    }
}
export type ProfileInitialStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: UserProfileType | null
}
type AddPostACType = {
    type: 'ADD-POST'
}
type UpdatePostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type SetUserProfileType = {
    type: 'SET-USER-PROFILE-TYPE'
    profile: UserProfileType
}
type ProfileActionType = AddPostACType | UpdatePostTextACType | SetUserProfileType

let initialState: ProfileInitialStateType = {
    posts: [
        {id: v1(), post: 'my first post', likesCount: 5},
        {id: v1(), post: 'nice I believe not last lol', likesCount: 17},
        {id: v1(), post: 'I am believe in it too', likesCount: 6},
        {id: v1(), post: 'What interesting movie do you know?', likesCount: 5},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state: ProfileInitialStateType = initialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: v1(), post: state.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SET-USER-PROFILE-TYPE':
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostAC = (): AddPostACType => {
    return {type: 'ADD-POST'}
}
export const updateNewPostTextAC = (text: string): UpdatePostTextACType => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}
export const setUserProfile = (profile: UserProfileType): SetUserProfileType => {
    return {type: 'SET-USER-PROFILE-TYPE', profile}
}

export default profileReducer;