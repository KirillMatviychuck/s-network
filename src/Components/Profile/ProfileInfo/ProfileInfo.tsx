import React from "react";
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";


type ProfileInfoPropsType = {
    userProfile: UserProfileType
}


const ProfileInfo: React.FC<ProfileInfoPropsType> = ({userProfile}) => {
    if (!userProfile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src={userProfile.photos.large} alt="user"/>
            </div>
        </div>
    )
}

export default ProfileInfo;