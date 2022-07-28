import React from "react";
import classNew from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={classNew.nav}>
            <div className={classNew.wrapperForNav}>
                <div className={classNew.itemsBlock}>
                    <div className={classNew.item}>
                        <NavLink to='/profile'
                                 className={({isActive}) => isActive ? classNew.activeLink : classNew.defaultClass}> Profile</NavLink>
                    </div>
                    <div className={classNew.item}>
                        <NavLink to='/dialogs'
                                 className={({isActive}) => isActive ? classNew.activeLink : classNew.defaultClass}>Dialogs</NavLink>
                    </div>
                    <div className={classNew.item}>
                        <NavLink to='/news'
                                 className={({isActive}) => isActive ? classNew.activeLink : classNew.defaultClass}>News</NavLink>
                    </div>
                    <div className={classNew.item}>
                        <NavLink to='/music'
                                 className={({isActive}) => isActive ? classNew.activeLink : classNew.defaultClass}> Music</NavLink>
                    </div>
                    <div className={classNew.item}>
                        <NavLink to='/settings'
                                 className={({isActive}) => isActive ? classNew.activeLink : classNew.defaultClass}>Settings</NavLink>
                    </div>
                    <div className={classNew.item}>
                        <NavLink to='/friends'
                                 className={({isActive}) => isActive ? classNew.activeLink : classNew.defaultClass}>Find
                            friend</NavLink>
                    </div>
                </div>
                <div className={classNew.friendsBlock}>
                    <div className={classNew.friendsHeader}>My Friends</div>
                    <div className={classNew.friendsList}>
                        <div className={classNew.friendAvatar}><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlH4r7TmLxm9P8JI9uSbuO94smIep3L1sStg&usqp=CAU"
                            alt="girl1"/></div>
                        <div className={classNew.friendAvatar}><img
                            src="https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_32.jpg" alt="man1"/>
                        </div>
                        <div className={classNew.friendAvatar}><img
                            src="https://i.pinimg.com/736x/ce/a1/0a/cea10a3e7b5b0188d2c3270a429ae0a8.jpg" alt="man2"/>
                        </div>
                        <div className={classNew.friendAvatar}><img src="https://65.img.avito.st/640x480/8558876065.jpg"
                                                                    alt="girl2"/></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;