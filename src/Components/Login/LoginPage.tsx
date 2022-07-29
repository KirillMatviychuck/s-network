import {Field, Form, Formik} from "formik";
import React from "react";
import classes from './LoginPage.module.css'

const LoginPage: React.FC<PropsType> = ({login}) => {

    return (
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false
                }}
                onSubmit={(values, {setSubmitting, setStatus}) => {
                    login(values.email,values.password,values.rememberMe, setStatus)
                    setSubmitting(false)
                }}
            >

                {({status, handleSubmit}) => (
                    <Form onSubmit={handleSubmit} className={classes.loginForm}>
                        <label htmlFor="email" className={status ? classes.error : classes.emailLabel}>Your email</label>
                        <Field className={status ? classes.inputError : classes.emailInput}
                               name="email"
                               type="email"
                               placeholder="Enter your email"
                        />
                        <label htmlFor="password" className={status ? classes.error : classes.passwordLabel}>Password</label>
                        <Field className={status ? classes.inputError : classes.loginPassword}
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
                        <div className={classes.errorStatus}>{status}</div>
                        <button type="submit" className={classes.submitButton}>Sign In</button>
                    </Form>
                )}

            </Formik>
    )
}

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean, setStatus: () => void) => void
}


export {LoginPage}