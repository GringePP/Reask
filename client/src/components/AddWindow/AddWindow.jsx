import React from "react";
import './AddWindow.scss';
import StoreAwareComponent from "../StoreAware/StoreAwareComponent";
import { addSong, addTestSong } from "../../actions";

let title, artist, poster;

export default class AddWindow extends StoreAwareComponent {

    checkAndAddSong() {
        (title && artist && poster)
        && this.store.dispatch(addSong({title, artist, poster}));
    }

    handleChange(e, index) {
        const value = e.target.value;
        switch (index) {
            case 0:
                title = value;
                break;
            case 1:
                artist = value;
                break;
            case 2:
                poster = value;
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="add-window">
                <div className='title'>Add Your Song</div>
                <div className="input-item">
                    <input onChange={ (e) => this.handleChange(e, 0) } type="text" placeholder='Title:'
                           className="input"/>
                </div>
                <div className="input-item">
                    <input onChange={ (e) => this.handleChange(e, 1) } type="text" placeholder='Artist:'
                           className="input"/>
                </div>
                <div className="input-item">
                    <input onChange={ (e) => this.handleChange(e, 2) } type="text" placeholder='Poster:'
                           className="input"/>
                </div>
                <button className="submit" onClick={ () => this.checkAndAddSong() }>Add Song</button>
                <button className="submit" onClick={ () => this.store.dispatch(addTestSong()) }>Add Dump Song</button>
            </div>
        )
    }
}