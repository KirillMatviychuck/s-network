import React from "react";
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {Dispatch} from "redux";


type ProfileInfoPropsType = {
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
}


const ProfileInfo: React.FC<ProfileInfoPropsType> = ({userProfile, status, updateStatus}) => {
    if (!userProfile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={userProfile.photos.large} alt="user"/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;