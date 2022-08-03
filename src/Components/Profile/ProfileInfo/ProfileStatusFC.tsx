import React, {ChangeEvent, useEffect, useState} from "react";
import classes from './ProfileStatus.module.css'
import {Dispatch} from "redux";

type PropsType = {
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
}

const ProfileStatusFC: React.FC<PropsType> = ({status, updateStatus}) => {
    let [editMode, setEditMode] = useState(false)
    let [userStatus, setUserStatus] = useState(status)

    useEffect(() => {
        setUserStatus(status)
    }, [status])

    const toggleEditModeHandler = () => {
        setEditMode(!editMode)
        updateStatus(userStatus)
    }
    const changeUserStatusHandler = (e: ChangeEvent<HTMLInputElement>) => setUserStatus(e.currentTarget.value)

    return (
        <h3>
            {!editMode
                ? <div className={classes.profileStatus}
                        onDoubleClick={toggleEditModeHandler}>{status}</div>
                : <input value={userStatus} onChange={changeUserStatusHandler} autoFocus
                         placeholder={'Write your status'} onBlur={toggleEditModeHandler}
                         type="text"/>}
        </h3>
    )
}


export {ProfileStatusFC}