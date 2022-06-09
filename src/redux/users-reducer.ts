export type UsersInitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {small: string | null, large: string | null}
    status: null | string
    followed: boolean

    // id: string
    // followed: boolean
    // avatar: string
    // name: string
    // status: string
    // location: {country: string, city: string}
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
export type UsersActionType = FollowType | UnfollowType | SetUsersType | SetCurrentPageType | ToggleIsFetchingType

let initialState: UsersInitialStateType = {
    users: [
        //test users
        // {id: v1(), followed: false, avatar: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM=',
        //     name: 'Kirill', status: 'What I am doing now?', location: { country: 'Ukraine', city: 'Kiyv' }},
        // {id: v1(), followed: false, avatar: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM=',
        //     name: 'Jeronimo', status: 'Here we go again', location: { country: 'Ukraine', city: 'Odesa' }},
        // {id: v1(), followed: false, avatar: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM=',
        //     name: 'Papa Roach', status: 'Last Resort', location: { country: 'USA', city: 'New York' }}
    ],
    pageSize: 4,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false
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
        default:
            return state;
    }
}

export const follow = (userId: number): FollowType => {
    return {type: 'FOLLOW-USER', userId}
}
export const unfollow = (userId: number): UnfollowType => {
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

export default usersReducer;