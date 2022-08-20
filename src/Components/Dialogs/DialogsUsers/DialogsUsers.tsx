import classNew from "./DialogsUsers.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsUsersPageTypes = {
    id: string
    name: string
    image: string
}

function DialogUsers(props: DialogsUsersPageTypes) {
    return (
        <div className={classNew.mainBlock}>
            <div className={classNew.userBlock}>
                <div className={classNew.image}><img src={props.image} alt="user"/></div>
                <div className={classNew.userName}>
                    <NavLink to={`/dialogs/${props.id}`}>
                        {props.name}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default DialogUsers;