import App from './App';
import { GET_SONG_LIST } from '../../actions';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    if (state.type !== GET_SONG_LIST) return {};
    return {
        songList: state.response
    }
};

const mapDispatchToState = (dispatch) => {

};


export default connect(mapStateToProps, mapDispatchToState)(App);