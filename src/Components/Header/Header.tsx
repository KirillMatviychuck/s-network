import React from "react";
import classNew from './Header.module.css'
import {NavLink} from "react-router-dom";
import logoutImage from "../../assets/button/logout-pngrepo-com.png"

type HeaderPropsType = {
    userLogin: string | null
    logoutUser: () => void
    isAuth: boolean
}

const Header: React.FC<HeaderPropsType> = ({isAuth, userLogin, logoutUser}) => {
    const logoutImg = {
        backgroundImage: `url(${logoutImage})`,
    }
    return (
        <header className={classNew.header}>
            <div className={classNew.headerContainer}>
                <div className={classNew.leftSideContent}>
                        <div>
                            <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'
                                 alt='headerImage'/>
                        </div>
                        <div>Social Network</div>
                </div>
                <div className={classNew.authWindow}>
                    <div className={classNew.login}>
                        {isAuth ? userLogin : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                    {isAuth && <div className={classNew.logout} onClick={logoutUser} style={logoutImg}>
                    </div>}
                </div>
            </div>
        </header>
    )
}

export default Header;