import React, {ChangeEvent, useState} from 'react';
import {UserProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader';
import {Dispatch} from 'redux';
import {ProfileStatusFC} from './ProfileStatusFC';
import defaultUserPicture from '../../../assets/defaultUserPicture.jpg'
import classes from './ProfileInfo.module.css'
import ProfileDataForm from './ProfileData/ProfileDataForm/ProfileDataForm';
import {updateProfileInfoModelType} from '../../../api/api';
import changePhoto from '../../../assets/button/change-photo.png'

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         userProfile,
                                                         status,
                                                         updateStatus,
                                                         isOwner,
                                                         savePhoto,
                                                         myId,
                                                         updateProfileInfo
                                                     }) => {
    const [editMode, setEditMode] = useState(false)
    const selectImagePhoto = {
        backgroundImage: `url(${changePhoto})`
    }
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
                <div className={classes.image}>
                    <img src={userProfile.photos?.large || defaultUserPicture} alt="user"/>
                </div>
                <div className={classes.status}>
                    <ProfileStatusFC status={status} updateStatus={updateStatus}/>
                </div>
                <div className={classes.name}>{userProfile.fullName}</div>
                <div className={classes.aboutMe}>{userProfile.aboutMe}</div>
                {isOwner &&
                    <label className={classes.addPhoto} style={selectImagePhoto} htmlFor="inputPhoto">
                        <input type="file" id="inputPhoto" onChange={onPhotoChange}/>
                    </label>
                }
                <div className={classes.profileInfo}>
                    {editMode &&
                        <ProfileDataForm myId={myId} updateProfileInfo={updateProfileInfo} setEditMode={setEditMode}/>}
                </div>
                {/*<ProfileDataDefault userProfile={userProfile}/>*/}
                <div className={classes.editBtn}>
                    <button onClick={changeEditModeHandler}>Edit</button>
                </div>
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