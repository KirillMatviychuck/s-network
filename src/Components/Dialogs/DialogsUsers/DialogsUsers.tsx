import classNew from "./DialogsUsers.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsUsersPageTypes = {
    id: string
    name: string
}

function DialogUsers(props: DialogsUsersPageTypes) {
    return (
        <div className={classNew.mainBlock}>
            <div className={classNew.userBlock}>
                <div className={classNew.image}><img src="https://i.pinimg.com/originals/d4/2c/2d/d42c2d5bec459a0c1422f143be2bf7a3.jpg" alt="user"/></div>
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