import Dialogs from "./Dialogs";
import {addMessageAC, DialogsInitialStateType, newChatTextAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppActionType, AppRootStateType} from "../../store/store-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}
type MapDispatchToPropsType = {
    onChangeChatArea: (text: string) => void
    addMessage: () => void
}
export type PropsForDialogsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AppActionType>): MapDispatchToPropsType => {
    return {
        onChangeChatArea: (text: string) => dispatch(newChatTextAC(text)),
        addMessage: () => dispatch(addMessageAC())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)