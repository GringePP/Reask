import React from "react";
import './Dialog.scss';

export default class Dialog extends React.Component {

    render() {
        return (
            this.props.visible &&
            <div className="dialog-wrapper">
                <div className="mask" onClick={ this.props.toggle }/>
                <div className="content">
                    { this.props.content }
                </div>
            </div>
        )
    }
}
