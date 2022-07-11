import React from 'react'
import classes from './Users.module.css'
import {UsersType} from "../../redux/users-reducer";
import {Preloader} from "../common/Preloader";
import {Dispatch} from "redux";
import {User} from "./User/User";
import {Paginator} from "./Paginator";

type PropsForUsersType = {
    users: Array<UsersType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    toggleInProgress: Array<number>
    follow: (userId: number) => (dispatch: Dispatch) => void
    unfollow: (userId: number) => (dispatch: Dispatch) => void
    onChangeCurrentPage: (pageNumber: number) => void
}

const Users: React.FC<PropsForUsersType> = ({
                                                users,
                                                pageSize,
                                                totalUsersCount,
                                                currentPage,
                                                onChangeCurrentPage,
                                                toggleInProgress,
                                                unfollow,
                                                follow,
                                                isFetching
                                            }) => {

    return (
        <div className={classes.wrapper}>
            {isFetching ? <Preloader/> : null}

            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage}/>
            {
                users.map(u => <User key={u.id}
                                     userId={u.id}
                                     follow={follow}
                                     unfollow={unfollow}
                                     toggleInProgress={toggleInProgress}
                                     isFollowed={u.followed}
                                     name={u.name}
                                     status={u.status}
                                     smallPhoto={u.photos.small}/>)
            }

        </div>
    )
}

export {Users};