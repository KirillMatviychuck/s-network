import React from 'react';
import {Field, Form, Formik} from "formik";
import classNew from "./ProfileDataForm.module.css";
import {Dispatch} from "redux";
import {updateProfileInfoModelType} from "../../../../../api/api";


const ProfileDataForm: React.FC<PropsType> = ({myId, updateProfileInfo, setEditMode}) => {

    const cancelButtonHandler = () => {

    }

    return (
        <Formik
            initialValues={{
                fullName: '',
                lookingForAJob: false,
                lookingForAJobDescription: '',
                aboutMe: ''
            }}
            onSubmit={(values, {setSubmitting}) => {
                const profileModel = {
                    userId: myId,
                    aboutMe: values.aboutMe,
                    lookingForAJob: values.lookingForAJob,
                    lookingForAJobDescription: values.lookingForAJobDescription,
                    fullName: values.fullName,
                    contacts: {
                        github: null,
                        vk: null,
                        facebook: null,
                        instagram: null,
                        twitter: null,
                        website: null,
                        youtube: null,
                        mainLink: null,
                    }
                }
                updateProfileInfo(profileModel)
                setEditMode(false)
                setSubmitting(false)
            }}
        >

            {({status, handleSubmit}) => (
                <Form onSubmit={handleSubmit} className={classNew.loginForm}>
                    <div className={classNew.nameBlock}>
                        <label htmlFor="fullName" className={classNew.label}>Name</label>
                        <Field
                            className={classNew.name}
                            name="fullName"
                            type="text"
                        />
                    </div>
                    <div className={classNew.lookingForAJobBlock}>
                        <label className={classNew.label}>Do you looking for a job?</label>
                        <Field className={classNew.lookingForAJob}
                               name="lookingForAJob"
                               type="checkbox"
                        />

                    </div>
                    <div className={classNew.lookingForAJobDescriptionBlock}>
                        <label htmlFor="lookingForAJobDescription" className={classNew.label}>What is your job?</label>
                        <Field className={classNew.lookingForAJobDescription}
                               name="lookingForAJobDescription"
                               type="text"
                        />
                    </div>
                    <div className={classNew.aboutMeBlock}>
                        <label htmlFor="aboutMe" className={classNew.label}>About me</label>
                        <Field className={classNew.aboutMe}
                               name="aboutMe"
                               type="text"
                        />
                    </div>
                    <div className={classNew.errorStatus}>{status}</div>
                    <div className={classNew.buttons}>
                        <button className={classNew.submitButton} type="submit">Confirm</button>
                        <button className={classNew.cancelButton} onClick={cancelButtonHandler}>Cancel</button>
                    </div>
                </Form>
            )}

        </Formik>
    );
};

type PropsType = {
    myId: number
    updateProfileInfo: (profile: updateProfileInfoModelType) => (dispatch: Dispatch) => void
    setEditMode: (value: boolean) => void
}

export default ProfileDataForm;