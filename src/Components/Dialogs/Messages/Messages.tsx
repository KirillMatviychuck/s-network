import classNew from "./Messages.module.css";
import React from "react";

type PropsForMessagesPageTypes = {
    id: string
    message: string
}

function Messages(props: PropsForMessagesPageTypes) {
    return (
        <div>
            <div className={classNew.message}>{props.message}</div>
        </div>
    )
}

export default Messages;