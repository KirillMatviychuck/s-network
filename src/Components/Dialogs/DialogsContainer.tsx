import Dialogs from "./Dialogs";
import React from "react";
import {addMessageAC, DialogsInitialStateType, newChatTextAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}
type MapDispatchToPropsType = {
    onChangeChatArea: (text: string) => void
    addMessage: () => void
}
export type PropsForDialogsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeChatArea: (text: string) => dispatch(newChatTextAC(text)),
        addMessage: () => dispatch(addMessageAC())
    }
}

const withRedirectDialogPage = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirectDialogPage)

export default DialogsContainer;