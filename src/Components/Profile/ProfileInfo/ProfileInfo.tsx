import React, {ChangeEvent} from "react";
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";
import {Dispatch} from "redux";
import {ProfileStatusFC} from "./ProfileStatusFC";
import defaultUserPicture from '../../../assets/defaultUserPicture.jpg'
import classes from './ProfileInfo.module.css'

type ProfileInfoPropsType = {
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
    isOwner: boolean
    savePhoto: any
}


const ProfileInfo: React.FC<ProfileInfoPropsType> = ({userProfile, status, updateStatus, isOwner, savePhoto}) => {
    if (!userProfile) {
        return <Preloader/>
    }

    const onPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={classes.mainWrap}>
                <img src={userProfile.photos?.large || defaultUserPicture} alt="user"/>
                {isOwner && <input type="file" onChange={onPhotoChange}/>}
                <ProfileStatusFC status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;