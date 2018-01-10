import React from 'react';
import SongCard from "../SongCard";
import './App.scss';
import Fab from "../Fab/Fab";
import StoreAwareComponent from "../StoreAware/StoreAwareComponent";
import { TOGGLE_DIALOG } from "../../actions";
import Dialog from "../Dialog";
import AddWindow from "../AddWindow";

export default class App extends StoreAwareComponent {

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
                <Fab onClick={ () => this.store.dispatch({type: TOGGLE_DIALOG}) }/>
                <Dialog content={ <AddWindow/> }/>
            </div>
        )
    }
}