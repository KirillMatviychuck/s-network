import React from 'react';
import {v1} from "uuid";
import dialogsReducer, {addMessageAC, DialogsInitialStateType, newChatTextAC} from "./dialogs-reducer";

test ('change text', () => {
    const startState: DialogsInitialStateType = {
        users: [
            {id: v1(), name: 'Igor', urlLink: ''}
        ],
        messages: [
            {id: v1(), message: 'Hello how are you?'},
        ],
        newChatText: ''
    }

    const finalState = dialogsReducer(startState,newChatTextAC('Hello'))

    expect(finalState.newChatText).toBe('Hello')
})

test ('change message', () => {
    const startState: DialogsInitialStateType = {
        users: [
            {id: v1(), name: 'Igor', urlLink: ''}
        ],
        messages: [
            {id: v1(), message: 'Hello how are you?'},
        ],
        newChatText: ''
    }
    const finalState = dialogsReducer(startState,addMessageAC())

    expect(finalState.messages.length).toBe(2)
    expect(startState.messages.length).toBe(1)

})