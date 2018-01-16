import React from "react";
import './SongCard.scss';

export default class SongCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: false
        }
       // console.log(this);
    }

    onMouseHover(e, isShow){
        this.setState({
            isShow:isShow
        })
        //console.log(e.target);
    }

    render() {
        const {id, title, artist, poster} = this.props.data;
        return (
            <div className='song-card' onMouseEnter={e => this.onMouseHover(e, true)} onMouseLeave={e => this.onMouseHover(e, false)}>
                <div className='poster'>
                    <div className='poster-img' style={ {backgroundImage: `url(${poster})`} }/>
                </div>
                <div className='info'>
                    <div className='category'>LIGHT MUSIC</div>
                    <div className='title'>{ title }</div>
                    <div className='artist'>
                        <span className='by'>by </span>
                        <span className='artist-name'>{ artist }</span>
                    </div>
                </div>
                {
                    this.state.isShow &&
                    <div className="delect-hover">
                        <img className="delect-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMAwIBAEGDQbyDwsE8woJDf4BlU7xUAAAJvSURBVHja7d3hjqMgFEDhC4IKWtv7/i+7zRqmzUaZse0sYM75a6aTb4BmtA0IERGdoM7aaH6YtX6UKvNRj9YPTmqrM/pKYZC6WvTV+poGxUV9vTBLNUV9p1DNorf6t+ZnV6fvdpEqMvp2VUyuSfUcQxL1qd78OH2uhlXyzDgyRZzVR16KNz055Fhev4pSPPvGkjWaMlI8mxmQA0MixYtvvPV0NUGMpiwQIECAADnStJhvi3avq6aMPdpFv7Kv5Gd55HptOOMk1bRD9ZokXhtvkbWojRdkzWjrnWVE9CxrpD/Ju5Z2CeLaXiVeHnU2mqa6JYW5VPQAnIiIqJXGpVdT4ZcUjjaHcp+9joO1k3wmF8p9hjGkJwyfebHULP85r2t98SdwH5oL6tuGdJqKbUOspgwQIECAANkNCBAgstNkh1F2c976MXvLMbkqIN1V70Un2w0h+0dY9F7wFUBmXevztzOLbHbRtak85Jq9aRhDujxm/1MPxSFz/rcN+Z++aGoqDek0Fb6b5/kXrweiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgrWxLFevZlkpu6fIgG42a6rJnVAZXHDLlD15e8udX9ro2FN/xTMSH7A7cy+rYuezM6qhgMz0R562d8lumz7LbbO0wVrG9YeoEG06uAQECRLIBAQJEsgEBAkSyAQFSGDJ22032n8xvQYzdLJrtrvpuH4JUdBYyECBrQIAAyQfk3s1stHweEsxOdqep2679I0h/pT8rRGjg4py/CgAAAABJRU5ErkJggg==" alt="delect-icon"/>
                    </div>
                }
                
            </div>
        )
    }
}