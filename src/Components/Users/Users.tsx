import React from 'react'
import classes from './Users.module.css'
import defaultUserPicture from "../../assets/defaultUserPicture.jpg";
import {UsersType} from "../../redux/users-reducer";
import {Preloader} from "../common/Preloader";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

type PropsForUsersType = {
    users: Array<UsersType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    toggleInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onChangeCurrentPage: (pageNumber: number) => void
    changeToggleProgress: (status: boolean, userId: number) => void
}

const Users = (props: PropsForUsersType) => {
    let pagesNumber = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesArr: Array<number> = []
    for (let i = 1; i <= pagesNumber; i++) {
        pagesArr.push(i)
    }
    const onFollowButtonPress = (userId: number) => {
        props.changeToggleProgress(true, userId)
        followAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.follow(userId)
                }
                props.changeToggleProgress(false, userId)
            })
    }
    const onUnfollowButtonPress = (userId: number) => {
        props.changeToggleProgress(true, userId)
        followAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unfollow(userId)
                }
                props.changeToggleProgress(false, userId)
            })
    }
    const changeCurrentPageHandler = (pageNumber: number) => props.onChangeCurrentPage(pageNumber)

    return (
        <div className={classes.wrapper}>
            {props.isFetching ? <Preloader/> : null}

            <div className={classes.pages}>
                {pagesArr.map(p => <span key={pagesArr[p]}
                                         className={props.currentPage === p ? classes.currentPage : classes.defaultPageStyle}
                                         onClick={() => {changeCurrentPageHandler(p)}}>{p}</span>)}
            </div>
            {
                props.users.map(u => <div key={u.id} className={classes.userWrapper}>
                        <div className={classes.avatarArea}>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={classes.userAvatar}
                                     src={u.photos.small !== null ? u.photos.small : defaultUserPicture} alt="avatar"/>
                            </NavLink>
                        </div>
                        <div className={classes.followArea}>
                            {u.followed
                                ? <button className={props.toggleInProgress.some(id => id === u.id) ? classes.disabledButton : classes.followButton}
                                        disabled={props.toggleInProgress.some(id => id === u.id)}
                                        onClick={() => {onUnfollowButtonPress(u.id)}}>Unfollow</button>

                                : <button className={props.toggleInProgress.some(id => id === u.id) ? classes.disabledButton : classes.followButton}
                                        disabled={props.toggleInProgress.some(id => id === u.id)}
                                        onClick={() => {onFollowButtonPress(u.id)}}>Follow</button>}
                        </div>
                        <div className={classes.userArea}>
                            <div className={classes.userName}>{u.name}</div>
                            <div className={classes.userStatus}>{u.status}</div>
                            <div className={classes.userLocation}>
                                <span className={classes.userCountry}>{'u.location.country'}</span><br/>
                                <span className={classes.userCity}>{'u.location.city'}</span>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}


export {Users};