import React from "react";
import './AddWindow.scss';

export default class AddWindow extends React.Component {

    render() {
        return (
            <div className="add-window">
                <div className='title'>Add Your Song</div>
                <div className="input-item">
                    <input type="text" placeholder='Title:' className="input"/>
                </div>
                <div className="input-item">
                    <input type="text" placeholder='Artist:' className="input"/>
                </div>
                <div className="input-item">
                    <input type="text" placeholder='Poster:' className="input"/>
                </div>
                <button className="submit">Add Song</button>
                <button className="submit">Add Dump Song</button>
            </div>
        )
    }
}