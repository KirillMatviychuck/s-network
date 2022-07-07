import React, {ChangeEvent} from "react";
import classNew from './Dialogs.module.css'
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import Messages from "./Messages/Messages";
import {PropsForDialogsType} from "./DialogsContainer";


const Dialogs: React.FC<PropsForDialogsType> = ({dialogsPage,onChangeChatArea,addMessage}) => {
    let addNewUser = dialogsPage.users.map(t => <DialogsUsers key={t.id} id={t.id} name={t.name}/>)
    let addNewMessage = dialogsPage.messages.map(t => <Messages key={t.id} id={t.id} message={t.message}/>)

    const changeChatTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => onChangeChatArea(e.currentTarget.value)
    const addMessageHandler = () => addMessage()

    return (
        <div className={classNew.allDialogsDesktop}>
            <div className={classNew.allDialogsUsers}>
                {addNewUser}
            </div>
            <div className={classNew.allMessages}>
                {addNewMessage}
            </div>
            <div className={classNew.textAreaBlock}>
                <textarea value={dialogsPage.newChatText} onChange={changeChatTextHandler}>

                </textarea>
                <div className={classNew.chatButton}> <button onClick={addMessageHandler}> Send </button> </div>
            </div>
        </div>
    )
}

export default Dialogs;