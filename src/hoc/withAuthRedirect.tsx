import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../store/store-redux";

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.authorization.isAuth
})

const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>;
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
}

export {withAuthRedirect}