import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./Components/Navbar/News/News";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginPageContainer from "./Components/Login/LoginPageContainer";
import {Preloader} from "./Components/common/Preloader";
import {initializeApp} from "./redux/app-reducer";
import {useAppDispatch, useAppSelector} from "./store/hooks";


const App = () => {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector(state => state.app.initialized)

    useEffect(() => {
        dispatch(initializeApp())
    },[dispatch])

        if (!initialized) return <Preloader />
        return (
            <BrowserRouter>
                <div className='backgroundMain'>
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className={'app-wrapper-content'}>
                            <Routes>
                                <Route path={'/'} element={<Navigate to={'/login'}/>}/>
                                <Route path="/login" element={<LoginPageContainer/>}/>
                                <Route path="/profile" element={<ProfileContainer/>}>
                                    <Route path=":userId" element={<ProfileContainer/>}/>
                                </Route>
                                <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                                <Route path={'/news'} element={<News/>}/>
                                <Route path={'/music'} element={<Music/>}/>
                                <Route path={'/settings'} element={<Settings/>}/>
                                <Route path={'/friends'} element={<UsersContainer/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }


export default App;
