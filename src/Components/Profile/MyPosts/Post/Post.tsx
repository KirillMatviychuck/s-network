import classNew from "./Post.module.css";
import React from "react";
import {ProfileInitialStateType} from "../../../../redux/profile-reducer";


type PostTypes = {
    message: string
    numberOfLikes: number
    profilePage: ProfileInitialStateType
}

const Post = React.memo((props: PostTypes) => {
    return (
        <div className={classNew.item}>
            <img
                src={props.profilePage.profile?.photos?.small ? props.profilePage.profile?.photos?.small : '' }
                alt="ava"/>
            {props.message}
            <div>
                <span>Likes: {props.numberOfLikes}</span>
            </div>
        </div>
    )
})

export default Post;