import {Field, Form, Formik} from "formik";
import React from "react";
import classNew from './LoginPage.module.css'

const LoginPage: React.FC<PropsType> = ({login}) => {

    const testFunction = () => {
        return '1'
    }
    const testLoginHandler = () => {
        login('kirill.mtvk@gmail.com', '112233445566', false, (testFunction) )
    }
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
                    <Form onSubmit={handleSubmit} className={classNew.loginForm}>
                        <label htmlFor="email" className={status ? classNew.error : classNew.emailLabel}>Your email</label>
                        <Field className={status ? classNew.inputError : classNew.emailInput}
                               name="email"
                               type="email"
                               placeholder="Enter your email"
                        />
                        <label htmlFor="password" className={status ? classNew.error : classNew.passwordLabel}>Password</label>
                        <Field className={status ? classNew.inputError : classNew.loginPassword}
                               name="password"
                               type={"password"}
                               placeholder="Enter your password"
                        />
                        <div className={classNew.rememberMeBlock}>
                            <label>
                                <Field className={classNew.rememberMe}
                                       name="rememberMe"
                                       type="checkbox"
                                />
                                Remember me</label>
                        </div>
                        <div className={classNew.errorStatus}>{status}</div>
                        <button type="submit" className={classNew.submitButton}>Sign In</button>
                        <button onClick={testLoginHandler} className={classNew.testLoginButton}>Test login</button>
                    </Form>
                )}

            </Formik>
    )
}

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean, setStatus: () => void) => void
}


export {LoginPage}