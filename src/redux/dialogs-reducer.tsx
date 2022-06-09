import {v1} from "uuid";

type DialogsTypes = {
    id: string
    name: string
}
type MessagesTypes = {
    id: string
    message: string
}
export type DialogsInitialStateType = {
    users: Array<DialogsTypes>
    messages: Array<MessagesTypes>
    newChatText: string
}
export type ActionTypeForDialogsReducer = NewChatTextACType | AddChatACType
type NewChatTextACType = {
    type: 'UPDATE-NEW-CHAT-TEXT'
    chatText: string
}
type AddChatACType = {
    type: 'ADD-MESSAGE'
}

let initialState: DialogsInitialStateType = {
        users: [
            {id: v1(), name: 'Kirill'},
            {id: v1(), name: 'Andrew'},
            {id: v1(), name: 'Olga'},
            {id: v1(), name: 'Alina'},
            {id: v1(), name: 'Sergey'},
            {id: v1(), name: 'Igor'}
        ],
        messages: [
            {id: v1(), message: 'Hello how are you?'},
            {id: v1(), message: 'I am fine, and how are you?'},
            {id: v1(), message: 'me too, what are you doing now?'},
            {id: v1(), message: 'watching a movie and you'},
            {id: v1(), message: 'I am reading the book'},
        ],
        newChatText: ''
}


export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionTypeForDialogsReducer): DialogsInitialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-CHAT-TEXT':
            return {...state, newChatText: action.chatText}
        // state.newChatText = action.chatText;
        // return state;
        case 'ADD-MESSAGE':
            let textBody = state.newChatText
            let newMessage = {id: v1(), message: textBody}
            return {
                ...state,
                newChatText: '',
                messages: [...state.messages, newMessage]
            }
            // let newMessage = {id: v1(), message: state.newChatText}
            // state.messages.push(newMessage)
            // state.newChatText = ''
            // return state;

        default:
            return state;
    }
}

export const newChatTextAC = (newText: string): NewChatTextACType => {
    return {type: 'UPDATE-NEW-CHAT-TEXT', chatText: newText}
}
export const addMessageAC = (): AddChatACType => {
    return {type: 'ADD-MESSAGE'}
}

export default dialogsReducer;