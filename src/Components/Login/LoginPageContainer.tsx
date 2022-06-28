import React from "react";
import classes from './LoginContainerPage.module.css'
import {LoginPage} from "./LoginPage";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/store-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

class LoginPageContainer extends React.Component<any, any> {
    render() {
        if (this.props.isAuth) {
            return <Navigate to={'/profile'}/>
        }
        return (
            <div className={classes.loginWrap}>
                <div className={classes.title}>Login</div>
                <LoginPage login={this.props.login}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    isAuth: state.authorization.isAuth
})

export default connect(mapStateToProps, {login})(LoginPageContainer)