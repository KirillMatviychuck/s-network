import React from "react";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/store-redux";
import {follow, getUsers, unfollow, UsersType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleInProgress: Array<number>
}
// type MapDispatchToPropsType = {
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: Array<UsersType>) => void
//     setCurrentPage: (currentPage: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
//     changeToggleProgress: (status: boolean, userId: number) => void
//     getUsers: (pageSize: number, currentPage: number) => (dispatch: Dispatch) => void
// }
// export type PropsForUsersClassPageType = MapStateToPropsType & MapDispatchToPropsType

class UsersClass extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onChangeCurrentPage = (pageNumber: number) => this.props.getUsers(this.props.pageSize, pageNumber)

    render() {
        return <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onChangeCurrentPage={this.onChangeCurrentPage}
                      isFetching={this.props.isFetching}
                      toggleInProgress={this.props.toggleInProgress}/>
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

export default compose(
    connect(mapStateToProps,{getUsers, follow, unfollow}),
    withAuthRedirect
)(UsersClass)

