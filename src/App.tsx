import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import News from "./Components/Navbar/News/News";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginPageContainer from "./Components/Login/LoginPageContainer";
import {connect} from "react-redux";
import {AppStoreType} from "./redux/store-redux";
import {Preloader} from "./Components/common/Preloader";
import {initializeApp} from "./redux/app-reducer";


class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) return <Preloader />
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
}

const mapStateToProps = (state: AppStoreType) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
