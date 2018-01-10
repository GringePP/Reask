import React from 'react';
import SongCard from "../songcard";
import './App.scss';

export default class App extends React.Component {

    componentDidMount() {
        this.props.getSongs();
    }

    // shouldComponentUpdate() {
    //     console.log(this.props.songList === undefined);
    //     return this.props.songList !== undefined;
    // }

    render() {
        const {songList} = this.props;
        return (
            <div className='app'>
                <div className='song-card-list'>
                    {
                        songList && songList.map((item, index) => {
                            return <SongCard key={ index } data={ item }/>
                        })
                    }
                </div>
            </div>
        )
    }
}