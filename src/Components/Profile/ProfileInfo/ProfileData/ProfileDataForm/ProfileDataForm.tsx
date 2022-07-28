import React from 'react';
import {Field, Form, Formik} from "formik";
import classes from "./ProfileDataForm.module.css";
import {Dispatch} from "redux";
import {updateProfileInfoModelType} from "../../../../../api/api";


const ProfileDataForm: React.FC<PropsType> = ({myId, updateProfileInfo, setEditMode}) => {
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
                <Form onSubmit={handleSubmit} className={classes.loginForm}>
                    <label htmlFor="fullName">Name</label>
                    <Field
                        name="fullName"
                        type="text"
                    />
                    <div className={classes.rememberMeBlock}>
                        <label>
                            <Field className={classes.rememberMe}
                                   name="lookingForAJob"
                                   type="checkbox"
                            />
                            Do you looking for a job?</label>
                    </div>
                    <label htmlFor="lookingForAJobDescription">Description of the job you are looking for</label>
                    <Field className={classes.rememberMe}
                           name="lookingForAJobDescription"
                           type="text"
                    />
                    <label htmlFor="aboutMe">About me</label>
                    <Field className={classes.rememberMe}
                           name="aboutMe"
                           type="text"
                    />

                    <div className={classes.errorStatus}>{status}</div>
                    <button type="submit" className={classes.submitButton}>Confirm</button>
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