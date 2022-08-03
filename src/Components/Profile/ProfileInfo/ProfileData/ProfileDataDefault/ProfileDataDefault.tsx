import React from 'react';
import {UserProfileType} from "../../../../../redux/profile-reducer";

const ProfileDataDefault: React.FC<PropsType> = ({userProfile}) => {
    return (
        <div>
            <div>Looking for a job: {userProfile.lookingForAJob ? 'yes' : 'no'}</div>
            {userProfile.lookingForAJobDescription && <div>Description about job: {userProfile.lookingForAJobDescription}</div>}
        </div>
    );
};

type PropsType = {
    userProfile: UserProfileType
}
export default ProfileDataDefault;