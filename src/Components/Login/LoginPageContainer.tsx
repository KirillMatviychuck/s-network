import React, {useCallback} from "react";
import classes from './LoginContainerPage.module.css'
import {LoginPage} from "./LoginPage";
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/store-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";

const LoginPageContainer = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.authorization.isAuth)
    const loginUserHandler = useCallback((email: string, password: string, rememberMe: boolean,
                                          setStatus: (message: string) => void) => {
        dispatch(login(email, password, rememberMe, setStatus))
    }, [dispatch])

    if (isAuth) return <Navigate to={'/profile'}/>

    return (
        <div className={classes.loginWrap}>
            <div className={classes.loginWindow}>
                <div className={classes.title}>Login</div>
                <LoginPage login={loginUserHandler}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.authorization.isAuth
})

export default connect(mapStateToProps, {login})(LoginPageContainer)