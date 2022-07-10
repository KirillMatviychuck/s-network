import {v1} from "uuid";
import profileReducer, {
    addPostAC,
    ProfileInitialStateType, setUserStatus,
    updateNewPostTextAC,
    userProfileAC
} from "./profile-reducer";


test ('update new post text', () => {
    const initialState: ProfileInitialStateType = {
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

    const finalState = profileReducer(initialState, updateNewPostTextAC('Hello'))

    expect(finalState.newPostText).toBe('Hello')
    expect(initialState.newPostText).toBe('')
})

test ('add new post', () => {
    const initialState: ProfileInitialStateType = {
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
    const stateWithUpdatedText = profileReducer(initialState, updateNewPostTextAC('Hello'))
    const finalState = profileReducer(stateWithUpdatedText, addPostAC())

    expect(finalState.newPostText).toBe('')
    expect(finalState.posts.length).toBe(5)
    expect(initialState.posts.length).toBe(4)
})

test ('set user profile', () => {
    const initialState: ProfileInitialStateType = {
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
    const contacts = {
        facebook: 'one',
        website: 'two',
        vk: 'vk',
        twitter: 'twitter',
        instagram: 'instagram',
        youtube: 'youtube',
        github: 'github',
        mainLink: 'mainLink'
    }
    const userNick = {
        aboutMe: 'looking for job',
        contacts: contacts,
        lookingForAJob: true,
        lookingForAJobDescription: 'Junior Developer, React/Redux',
        fullName: 'Nick',
        userId: 12,
        photos: {
            small: null,
            large: null
        }
    }
    const finalState = profileReducer(initialState, userProfileAC(userNick))

    expect(finalState.profile?.fullName).toBe('Nick')
    expect(initialState.profile).toBeNull()
})

test ('set user status', () => {
    const initialState: ProfileInitialStateType = {
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
    const finalState = profileReducer(initialState, setUserStatus('That is the way'))

    expect(finalState.status).toBe('That is the way')
    expect(initialState.status).toBe('')
})


