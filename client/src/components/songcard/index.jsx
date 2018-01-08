import React from "react";
import './SongCard.scss';

export default class SongCard extends React.Component {

    render() {
        const {id, title, artist, poster} = this.props.data;
        return (
            <div className='song-card'>
                <div className='poster'>
                    <div className='poster-img' style={ {backgroundImage: `url(${poster})`} }/>
                </div>
                <div className='info'>
                    <p className='category'>LIGHT MUSIC</p>
                    <p className='title'>{ title }</p>
                    <div>
                        <span className='by'>by </span>
                        <span className='artist'>{ artist }</span>
                    </div>
                </div>
            </div>
        )
    }
}