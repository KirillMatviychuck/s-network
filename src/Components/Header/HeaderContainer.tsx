import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, logout} from "../../redux/auth-reducer";
import {AppStoreType} from "../../redux/store-redux";


export type MapStateToPropsType = {
    login: string
    isAuth: boolean
}
export type MapDispatchToProps = {
    setAuthUserData: (id: number, login: string, email: string) => void
}

// type HeaderContainerType = MapStateToPropsType & MapDispatchToProps
class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return <Header login={this.props.login} logout={this.props.logout} isAuth={this.props.isAuth}/>

    }
}

const mapStateToProps = (state: AppStoreType) => ({
    login: state.authorization.login,
    isAuth: state.authorization.isAuth
})

export default connect(mapStateToProps, {authMe, logout})(HeaderContainer);