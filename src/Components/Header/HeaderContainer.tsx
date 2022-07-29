import React, {useCallback} from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {useAppDispatch, useAppSelector} from "../../store/hooks";

const HeaderContainer = () => {
    const dispatch = useAppDispatch()
    const userLogin = useAppSelector(state => state.authorization.login)
    const isAuth = useAppSelector(state => state.authorization.isAuth)

    const logoutUser = useCallback(() => dispatch(logout()), [dispatch])

    return <Header userLogin={userLogin} logoutUser={logoutUser} isAuth={isAuth}/>
}

export default HeaderContainer;