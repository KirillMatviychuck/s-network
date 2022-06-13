import React from "react";

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <h3>
                {!this.state.editMode
                        ? <span onDoubleClick={this.activateEditMode.bind(this)}> Here you can write your status</span>
                        : <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"/>}
            </h3>
        )
    }
}

export {ProfileStatus}