import React from "react";
import classNew from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    userProfile: UserProfileType
}

const Profile: React.FC<ProfilePropsType> = ({userProfile}) => {
    return (
        <div className={classNew.content}>
            <ProfileInfo userProfile={userProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;