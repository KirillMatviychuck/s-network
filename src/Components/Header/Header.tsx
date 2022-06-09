import React from "react";
import classNew from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
}

const Header: React.FC<HeaderPropsType> = ({isAuth,login}) => {
    return (
        <header className={classNew.header}>
            <div className={classNew.flexContainer}>
                <div>
                    <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' alt='headerImage'/>
                </div>
                <div className={classNew.login}>
                    {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
                <div className={classNew.emptyDiv}>

                </div>
            </div>
        </header>
    )
}

export default Header;