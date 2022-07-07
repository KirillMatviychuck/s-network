import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStoreType} from "../../redux/store-redux";

class HeaderContainer extends React.Component<any, any> {

    render() {
        return <Header login={this.props.login} logout={this.props.logout} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    login: state.authorization.login,
    isAuth: state.authorization.isAuth
})

export default connect(mapStateToProps, {logout})(HeaderContainer);