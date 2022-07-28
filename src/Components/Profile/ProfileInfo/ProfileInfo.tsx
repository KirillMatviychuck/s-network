import React, {ChangeEvent, useState} from "react";
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";
import {Dispatch} from "redux";
import {ProfileStatusFC} from "./ProfileStatusFC";
import defaultUserPicture from '../../../assets/defaultUserPicture.jpg'
import classes from './ProfileInfo.module.css'
import ProfileDataForm from "./ProfileData/ProfileDataForm/ProfileDataForm";
import ProfileDataDefault from "./ProfileData/ProfileDataDefault/ProfileDataDefault";
import {updateProfileInfoModelType} from "../../../api/api";

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({userProfile, status, updateStatus, isOwner, savePhoto, myId, updateProfileInfo}) => {
    const [editMode, setEditMode] = useState(false)

    const changeEditModeHandler = () => setEditMode(!editMode)

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
                {editMode ? <ProfileDataForm myId={myId} updateProfileInfo={updateProfileInfo} setEditMode={setEditMode}/> : <ProfileDataDefault userProfile={userProfile} />}
                <button onClick={changeEditModeHandler}>Edit</button>
            </div>
        </div>
    )
}

type ProfileInfoPropsType = {
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => (dispatch: Dispatch) => void
    isOwner: boolean
    savePhoto: any
    myId: number
    updateProfileInfo: (profile: updateProfileInfoModelType) => (dispatch: Dispatch) => void
}


export default ProfileInfo;