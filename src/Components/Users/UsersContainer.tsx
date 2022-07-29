import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/store-redux";
import {follow, getUsers, unfollow} from "../../redux/users-reducer";
import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

const mapStateToProps = (state: AppRootStateType) => {
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

