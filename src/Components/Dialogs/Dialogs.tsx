import React, {ChangeEvent} from "react";
import classNew from './Dialogs.module.css'
import DialogsUsers from "./DialogsUsers/DialogsUsers";
import Messages from "./Messages/Messages";
import {PropsForDialogsType} from "./DialogsContainer";


const Dialogs: React.FC<PropsForDialogsType> = ({dialogsPage, onChangeChatArea, addMessage}) => {
    let addNewUser = dialogsPage.users.map(t => <DialogsUsers key={t.id} id={t.id} name={t.name} image={t.urlLink}/>)
    let addNewMessage = dialogsPage.messages.map(t => <Messages key={t.id} id={t.id} message={t.message}/>)

    const changeChatTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => onChangeChatArea(e.currentTarget.value)
    const addMessageHandler = () => addMessage()

    return (
        <div className={classNew.allDialogsBlock}>
            <div className={classNew.dialogUser}>
                {addNewUser}
            </div>
            <div className={classNew.chatBlock}>
                <div className={classNew.allMessages}>
                    {addNewMessage}
                </div>
            </div>
            <div className={classNew.textAreaBlock}>
                <div>
                <textarea value={dialogsPage.newChatText} onChange={changeChatTextHandler}>

                </textarea>
                </div>
                <div className={classNew.chatButtonBlock} onClick={addMessageHandler}>
                    <button className={classNew.chatButton}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;