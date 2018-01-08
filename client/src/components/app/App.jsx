import React from 'react';
import SongCard from "../songcard";

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
            <div>
                <div>
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