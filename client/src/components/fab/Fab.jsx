import React from "react";
import './Fab.scss';

export default class Fab extends React.Component {

    render() {
        return (
            <div className="fab-wrapper" onClick={this.props.onClick}>
                <div className="fab-content">+</div>
            </div>
        )
    }
}