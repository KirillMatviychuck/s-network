import React from "react";
import classNew from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import {Dispatch} from "redux";

type ProfilePropsType = {
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
    isOwner: boolean
    savePhoto: any
}

const Profile: React.FC<ProfilePropsType> = ({userProfile, status, updateStatus, isOwner, savePhoto}) => {
    return (
        <div className={classNew.content}>
            <ProfileInfo userProfile={userProfile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;