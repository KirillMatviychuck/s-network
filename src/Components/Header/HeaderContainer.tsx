import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthInitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStoreType} from "../../redux/store-redux";


export type MapStateToPropsType = {
    login: string
    isAuth: boolean
}
export type MapDispatchToProps = {
    setAuthUserData: (id: number, login: string, email: string) => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToProps
class HeaderContainer extends React.Component<any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} />

    }
}

const mapStateToProps = (state: AppStoreType) => ({
    login: state.authorization.login,
    isAuth: state.authorization.isAuth
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);