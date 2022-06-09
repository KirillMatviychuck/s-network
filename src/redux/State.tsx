export {}
// import {v1} from "uuid";
// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// export type StoreTypes = {
//     _state: RootStateTypes
//     getState: () => RootStateTypes
//     _callSubscriber: (state: any) => void
//     dispatch: (action: any) => void
//     subscribe: (observe: any) => void
// }
// export type RootStateTypes = {
//     profilePage: ProfilePageTypes
//     dialogsPage: DialogsPageTypes
//     sidebarPage: SidebarPageType
// }
// export type PostsTypes = {
//     id: string
//     post: string
//     likesCount: number
// }
// export type ProfilePageTypes = {
//     posts: Array<PostsTypes>
//     newPostText: string
// }
// export type DialogsPageTypes = {
//     users: Array<DialogsTypes>
//     messages: Array<MessagesTypes>
//     newChatText: string
// }
// export type SidebarPageType = {}
// export type DialogsTypes = {
//     id: string
//     name: string
// }
// export type MessagesTypes = {
//     id: string
//     message: string
// }
//
// let store: StoreTypes = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), post: 'my first post', likesCount: 5},
//                 {id: v1(), post: 'nice I believe not last lol', likesCount: 17},
//                 {id: v1(), post: 'I am believe in it too', likesCount: 6},
//                 {id: v1(), post: 'What interesting movie do you know?', likesCount: 5},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             users: [
//                 {id: v1(), name: 'Kirill'},
//                 {id: v1(), name: 'Andrew'},
//                 {id: v1(), name: 'Olga'},
//                 {id: v1(), name: 'Alina'},
//                 {id: v1(), name: 'Sergey'},
//             ],
//             messages: [
//                 {id: v1(), message: 'Hello how are you?'},
//                 {id: v1(), message: 'I am fine, and how are you?'},
//                 {id: v1(), message: 'me too, what are you doing now?'},
//                 {id: v1(), message: 'watching a movie and you'},
//                 {id: v1(), message: 'I am reading the book'},
//             ],
//             newChatText: ''
//         },
//         sidebarPage: {}
//     },
//     getState() {
//         return this._state;
//     },
//     _callSubscriber(state: any) {
//
//     },
//     subscribe(observe: any) {
//         this._callSubscriber = observe
//     },
//
//     dispatch(action: any) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
//
//         this._callSubscriber(this._state)
//     },
// }
//
// export default store
