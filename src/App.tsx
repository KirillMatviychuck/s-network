import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/Navbar/News/News";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {LoginPage} from "./Components/Login/LoginPage";


function App() {
    return (
        <BrowserRouter>
            <div className='backgroundMain'>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Routes>
                            <Route path="/login" element={<LoginPage />}/>
                            <Route path="/profile" element={<ProfileContainer />}>
                                <Route path=":userId" element={<ProfileContainer />} />
                            </Route>
                            <Route path={'/dialogs/*'} element={<DialogsContainer />}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/settings'} element={<Settings/>}/>
                            <Route path={'/friends'} element={<UsersContainer />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
