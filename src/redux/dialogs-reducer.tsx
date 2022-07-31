import {v1} from "uuid";

const DialogsInitialState = {
        users: [
            {id: v1(), name: 'Artem'},
            {id: v1(), name: 'Andrew'},
            {id: v1(), name: 'Olga'},
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


export const dialogsReducer = (state: DialogsInitialStateType = DialogsInitialState, action: DialogsActionType): DialogsInitialStateType => {
    switch (action.type) {
        case 'DIALOGS/UPDATE-NEW-CHAT-TEXT':
            return {...state, newChatText: action.chatText}
        case 'DIALOGS/ADD-MESSAGE':
            return {
                ...state,
                newChatText: '',
                messages: [...state.messages, {id: v1(), message: state.newChatText}]
            }
        default:
            return state;
    }
}

export const newChatTextAC = (newText: string) => ({type: 'DIALOGS/UPDATE-NEW-CHAT-TEXT', chatText: newText} as const)
export const addMessageAC = () => ({type: 'DIALOGS/ADD-MESSAGE'} as const)

export type DialogsActionType =
    | ReturnType<typeof newChatTextAC>
    | ReturnType<typeof addMessageAC>

export type DialogsInitialStateType = typeof DialogsInitialState

export default dialogsReducer;