import classes from './User.module.css'
import {NavLink} from "react-router-dom";
import defaultUserPicture from "../../../assets/defaultUserPicture.jpg";
import React from "react";
import {Dispatch} from "redux";

export const User: React.FC<PropsType> = ({
                                              toggleInProgress,
                                              userId,
                                              unfollow,
                                              follow,
                                              isFollowed,
                                              name,
                                              status,
                                              smallPhoto
                                          }) => {
    const onFollowButtonPress = (userId: number) => follow(userId)
    const onUnfollowButtonPress = (userId: number) => unfollow(userId)
    let shouldItBeDisabled = toggleInProgress.some(id => id === userId)

    return (
        <div className={classes.usersBlock}>
            <div className={classes.userWrapper}>
                <div className={classes.avatarArea}>
                    <NavLink to={'/profile/' + userId}>
                        <img className={classes.userAvatar}
                             src={smallPhoto !== null ? smallPhoto : defaultUserPicture} alt="avatar"/>
                    </NavLink>
                </div>
                <div className={classes.followArea}>
                    {isFollowed
                        ? <button className={shouldItBeDisabled ? classes.disabledButton : classes.followButton}
                                  disabled={shouldItBeDisabled}
                                  onClick={() => {
                                      onUnfollowButtonPress(userId)
                                  }}>Unfollow</button>

                        : <button className={shouldItBeDisabled ? classes.disabledButton : classes.followButton}
                                  disabled={shouldItBeDisabled}
                                  onClick={() => {
                                      onFollowButtonPress(userId)
                                  }}>Follow</button>}
                </div>
                <div className={classes.userArea}>
                    <div className={classes.userName}>@ {name}</div>
                    <div className={classes.userStatus}>{status}</div>
                </div>
            </div>
        </div>
    )
}

type PropsType = {
    userId: number
    follow: (userId: number) => (dispatch: Dispatch) => void
    unfollow: (userId: number) => (dispatch: Dispatch) => void
    toggleInProgress: Array<number>
    isFollowed: boolean
    name: string
    status: string | null
    smallPhoto: string | null
}