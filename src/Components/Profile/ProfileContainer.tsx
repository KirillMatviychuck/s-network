import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/store-redux";
import {getUserStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
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


class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) userId = 24037;
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <Profile {...this.props} userProfile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

const withRedirectProfilePage = withAuthRedirect(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getUserStatus, updateStatus})(withRouter(withRedirectProfilePage))

