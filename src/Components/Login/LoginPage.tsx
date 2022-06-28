import {Field, Form, Formik} from "formik";
import React from "react";
import classes from './LoginPage.module.css'
import {Dispatch} from "redux";

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => void
}

const LoginPage: React.FC<PropsType> = ({login}) => {

    return (
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false
                }}
                onSubmit={values => {
                    login(values.email,values.password,values.rememberMe)
                }}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty}) => (
                    <Form onSubmit={handleSubmit} className={classes.loginForm}>

                        <Field className={classes.emailInput}
                               name="email"
                               type="email"
                               placeholder="Enter your email"
                        />
                        <Field className={classes.loginPassword}
                               name="password"
                               type={"password"}
                               placeholder="Enter your password"
                        />
                        <div className={classes.rememberMeBlock}>
                            <label>
                                <Field className={classes.rememberMe}
                                       name="rememberMe"
                                       type="checkbox"
                                />
                                Remember me</label>
                        </div>
                        <button type="submit" className={classes.submitButton}>Submit</button>
                    </Form>
                )}

            </Formik>
    )
}

export {LoginPage}