import StoreAwareComponent from "../StoreAware";
import React from "react";
import { getSongs, TOGGLE_DIALOG } from "../../redux/actions";
import Fab from "../Fab/Fab";
import SongCard from "./SongCard";
import './SongModule.scss';


export default class SongModule extends StoreAwareComponent {

    componentDidMount() {
        this.store.dispatch(getSongs());
    }

    render() {
        const { songList } = this.props;
        return (
            <div className="song-module">
                <div className='song-card-list'>
                    {
                        songList && songList.map((item, index) => {
                            return <SongCard key={ index } data={ item }/>
                        })
                    }
                </div>
                <Fab onClick={ () => this.store.dispatch({ type: TOGGLE_DIALOG }) }/>
            </div>
        )
    }
}