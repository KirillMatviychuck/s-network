import React from 'react';
import {UserProfileType} from "../../../../../redux/profile-reducer";

const ProfileDataDefault: React.FC<PropsType> = ({userProfile}) => {
    return (
        <div>
            <div>Name: {userProfile.fullName}</div>
            <div>Looking for a job: {userProfile.lookingForAJob ? 'yes' : 'no'}</div>
            {userProfile.lookingForAJobDescription && <div>About me: {userProfile.lookingForAJobDescription}</div>}

        </div>
    );
};

type PropsType = {
    userProfile: UserProfileType
}
export default ProfileDataDefault;