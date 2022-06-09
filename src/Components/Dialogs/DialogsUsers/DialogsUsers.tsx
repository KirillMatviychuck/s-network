import classNew from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsUsersPageTypes = {
    id: string
    name: string
}

function DialogUsers(props: DialogsUsersPageTypes) {
    return (
            <div className={classNew.userName}>
                <NavLink to={`/dialogs/${props.id}`}>
                    {props.name}
                </NavLink>
            </div>
    )
}

export default DialogUsers;