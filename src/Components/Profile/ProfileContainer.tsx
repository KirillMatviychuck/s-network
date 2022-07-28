import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/store-redux";
import {getUserStatus, savePhoto, setUserProfile, updateProfileInfo, updateStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


function withRouter(Component: any) {
    return function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
}


class ProfileContainer extends React.Component<any, any> {

    refreshProfile() {
        let userId = this.props.router.params.userId
        if (!userId) userId = this.props.myId;
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props} userProfile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        isOwner={!this.props.router.params.userId}
                        savePhoto={this.props.savePhoto}
                        myId={this.props.myId}
                        updateProfileInfo={this.props.updateProfileInfo}/>
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.authorization.id
})

const withRedirectProfilePage = withAuthRedirect(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile,
    getUserStatus,
    updateStatus,
    savePhoto,
    updateProfileInfo
})(withRouter(withRedirectProfilePage))


