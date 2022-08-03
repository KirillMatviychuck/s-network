import React from "react";
import classNew from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {updateProfileInfoModelType} from "../../api/api";

type ProfilePropsType = {
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
    isOwner: boolean
    savePhoto: any
    myId: number
    updateProfileInfo: (profile: updateProfileInfoModelType) => (dispatch: Dispatch) => void
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 userProfile,
                                                 status,
                                                 updateStatus,
                                                 isOwner,
                                                 savePhoto,
                                                 myId,
                                                 updateProfileInfo
                                             }) => {
    return (
        <div className={classNew.content}>
            <ProfileInfo userProfile={userProfile}
                         status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
                         myId={myId}
                         updateProfileInfo={updateProfileInfo}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;