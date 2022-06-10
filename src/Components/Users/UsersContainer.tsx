import React from "react";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/store-redux";
import {
    changeToggleProgress,
    follow,
    setCurrentPage,
    setUsers,
    toggleIsFetching,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    changeToggleProgress: (status: boolean, userId: number) => void
}
export type PropsForUsersClassPageType = MapStateToPropsType & MapDispatchToPropsType

class UsersClass extends React.Component<PropsForUsersClassPageType, any> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    onChangeCurrentPage = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(this.props.pageSize, pageNumber)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onChangeCurrentPage={this.onChangeCurrentPage}
                      isFetching={this.props.isFetching}
                      toggleInProgress={this.props.toggleInProgress}
                      changeToggleProgress={this.props.changeToggleProgress}/>
    }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleInProgress: state.usersPage.toggleInProgress
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         toggleFollow: (userId: number) => dispatch(toggleFollow(userId)),
//         setUsers: (users: Array<UsersType>) => dispatch(setUsers(users)),
//         setCurrentPage: (pageNumber: number) => dispatch(setCurrentPage(pageNumber)),
//         toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetching(isFetching))
//     }
// }

export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, changeToggleProgress})(UsersClass)