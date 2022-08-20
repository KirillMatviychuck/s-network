import React, {useCallback} from "react";
import classNew from './LoginContainerPage.module.css'
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
        <div className={classNew.loginWrap}>
            <div className={classNew.alert}>If you can't access the site, use VPN</div>
            <div className={classNew.loginWindow}>
                <div className={classNew.title}>Login</div>
                <LoginPage login={loginUserHandler}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.authorization.isAuth
})

export default connect(mapStateToProps, {login})(LoginPageContainer)