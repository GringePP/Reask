import React from "react";
import './Dialog.scss';

export default class Dialog extends React.Component {

    render() {
        return (
            <div className="dialog-wrapper" style={ {display: this.props.visible ? 'block' : 'none'} }>
                <div className="mask" onClick={ this.props.toggle }/>
                <div className="content">
                    { this.props.content }
                </div>
            </div>
        )
    }
}
