import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/store-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
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
        if (!userId) userId=2;
        this.props.setUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} userProfile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    profile: state.profilePage.profile
})

const withRedirectProfilePage = withAuthRedirect(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withRouter(withRedirectProfilePage))

