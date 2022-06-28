import React, {ChangeEvent} from "react";

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <h3>
                {!this.state.editMode
                    ? <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    : <input value={this.state.status} onChange={this.onStatusInputChange} autoFocus
                             placeholder={'Write your status'} onBlur={this.deactivateEditMode.bind(this)}
                             type="text"/>}
            </h3>
        )
    }
}

export {ProfileStatus}