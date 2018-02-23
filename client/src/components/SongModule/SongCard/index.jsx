import React from "react";
import './SongCard.scss';
import StoreAwareComponent from "../../StoreAware";
import {deleteSong} from '../../../redux/actions';

export default class SongCard extends StoreAwareComponent {
    constructor(props){
        super(props);
        this.state = {
            isShowDelectHover: false
        }
    }

    onMouseHover(e, isShow){
        this.setState({
            isShowDelectHover:isShow
        })
    }

    delectSong(id){
        this.store.dispatch(deleteSong(id));
    }

    render() {
        const {id, title, artist, poster} = this.props.data;
        return (
            <div className='song-card card' onMouseEnter={e => this.onMouseHover(e, true)} onMouseLeave={e => this.onMouseHover(e, false)}>
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
                    this.state.isShowDelectHover &&
                    <div className="delect-hover" onClick={e => this.delectSong(id)}>
                        <img className="delect-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAOVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8dlA9AAAAEnRSTlMAgGDAQDCgIBDw0OBQcN+wn88turXtAAABmUlEQVR42u3dy26DMBRF0WNj88qjyf3/j63UTjpCCQ5wRPeeMvGSZUtMfEVERERE/pVreq1bGWRbfUzxRs8sy8ZHvNv9Kr/qPVaU5FadYlUPeTXeY2VmB6WP1VndXjXW18uoPuIcWzJFQzfZVKKlTjZdo6WnbErRlH5zW9YeAXELiFtA3ALiFhC3/hmkJPtERERERE6FSwkIkJ+AAAGyHBAgQJYDAgTIckCAAFkOCBAgywHZA5JsPgABAgQIECBAgAABAgQIECBAgAABAgQIECACAgQIECBAgBy/XiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCHrxcIECBAmiBd+tMeH3jg5cyQLkwqausrTKpnGcWnxkp41J3lvfUkneOQDGrtGg7Nau8SBmW1l+P4LvpAo8GWZIOpuS4nxOLiqvpM4xTNeQynru0Sk7nnOY5rHnUKyWcdUpnikPpRH26Y47VMz/mhvyZz1SYNfezZJWuzhn6KnZqzti33l9i8Lg3aobHktGGlioiIiIgM+wZVfUHJnLuLAQAAAABJRU5ErkJggg==" alt="delect-icon"/>
                    </div>
                }
                
            </div>
        )
    }
}