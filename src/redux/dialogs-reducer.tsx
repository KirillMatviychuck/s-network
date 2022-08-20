import {v1} from "uuid";

const DialogsInitialState = {
        users: [
            {id: v1(), name: 'Artem',
                urlLink: 'https://pickaface.net/gallery/avatar/52575241_180411_1804_4lb.png'},
            {id: v1(), name: 'Andrew',
                urlLink: 'https://pickaface.net/gallery/avatar/TrueXPixels542b8838a55de.png'},
            {id: v1(), name: 'Olga',
                urlLink: 'https://i.pinimg.com/originals/d4/2c/2d/d42c2d5bec459a0c1422f143be2bf7a3.jpg'},
        ],
        messages: [
            {id: v1(), message: 'Hello how are you?'},
            {id: v1(), message: 'What are you doing now?'},
            {id: v1(), message: 'Do you know any interesting movie to watch?'},
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