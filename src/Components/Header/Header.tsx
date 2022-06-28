import React from "react";
import classNew from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Dispatch} from "redux";

type HeaderPropsType = {
    login: string
    logout: () => (dispatch: Dispatch) => void
    isAuth: boolean
}

const Header: React.FC<HeaderPropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={classNew.header}>
            <div className={classNew.flexContainer}>
                <div>
                    <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'
                         alt='headerImage'/>
                </div>
                <div className={classNew.authWindow}>
                    <div className={classNew.login}>
                        {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                    <br/>
                    {isAuth && <div className={classNew.logout} onClick={logout}>
                        Logout
                    </div>}
                </div>
            </div>
        </header>
    )
}

export default Header;