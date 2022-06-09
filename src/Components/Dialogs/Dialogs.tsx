import React, {ChangeEvent} from "react";
import classNew from './Dialogs.module.css'
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import Messages from "./Messages/Messages";
import {PropsForDialogsType} from "./DialogsContainer";


function Dialogs (props: PropsForDialogsType) {
    let addNewUser = props.dialogsPage.users.map(t => <DialogsUsers key={t.id} id={t.id} name={t.name}/>)
    let addNewMessage = props.dialogsPage.messages.map(t => <Messages key={t.id} id={t.id} message={t.message}/>)

    const onChangeChatArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onChangeChatArea(text)
    }
    const addMessageHandler = () => {
        props.addMessage()
    }
    return (
        <div className={classNew.allDialogsDesktop}>
            <div className={classNew.allDialogsUsers}>
                {addNewUser}
            </div>
            <div className={classNew.allMessages}>
                {addNewMessage}
            </div>
            <div className={classNew.textAreaBlock}>
                <textarea value={props.dialogsPage.newChatText} onChange={onChangeChatArea}>

                </textarea>
                <div className={classNew.chatButton}> <button onClick={addMessageHandler}> Send </button> </div>
            </div>
        </div>
    )
}

export default Dialogs;