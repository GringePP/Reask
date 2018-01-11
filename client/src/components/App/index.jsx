import App from './App';
import { getSongs } from '../../actions';
import { connect } from "react-redux";

const mapStateToProps = ({songReducer: state}) => {
    return {
        songList: state.response
    }
};

const mapDispatchToState = (dispatch) => {
    return {
        getSongs: () => dispatch(getSongs()),
    }
};


export default connect(mapStateToProps, mapDispatchToState)(App);