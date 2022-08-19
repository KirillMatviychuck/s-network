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
            <div className={classNew.myPostImage}>
                <img
                    src={props.profilePage.profile?.photos?.small ? props.profilePage.profile?.photos?.small : ''}
                    alt="ava"/>
            </div>
            <div className={classNew.myPostMessage}>
                {props.message}
            </div>
            <div className={classNew.myPostLikes}>
                <span>Likes: {props.numberOfLikes}</span>
            </div>
        </div>
    )
})

export default Post;