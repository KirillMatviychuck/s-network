import React from "react";
import MyPosts from "./MyPosts";
import {AppRootStateType} from "../../../store/store-redux";
import {
    addPostAC,
    ProfileInitialStateType,
    updateNewPostTextAC
} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateToPropsType = {
    profilePage: ProfileInitialStateType
}
type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
export type PropsForProfileType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
        return {
            profilePage: state.profilePage
        }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
        addPost: () => dispatch(addPostAC())
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;