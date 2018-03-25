import React from "react";
import './SongCard.scss';
import StoreAwareComponent from "../../StoreAware";
import { deleteSong } from '../../../redux/actions';

export default class SongCard extends StoreAwareComponent {
    constructor(props) {
        super(props);
    }

    delectSong(id) {
        this.store.dispatch(deleteSong(id));
    }

    render() {
        const { id, title, artist, poster } = this.props.data;
        return (
            <div className='song-card card'>
                <div className='poster'>
                    <div className='poster-img' style={ { backgroundImage: `url(${poster})` } }/>
                </div>
                <div className='info'>
                    <div className='category'>LIGHT MUSIC</div>
                    <div className='title'>{ title }</div>
                    <div className='artist'>
                        <span className='by'>by </span>
                        <span className='artist-name'>{ artist }</span>
                    </div>
                </div>
            </div>
        )
    }
}