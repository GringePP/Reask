import { connect } from "react-redux";
import SongModule from "./SongModule";

const mapStateToProps = ({songReducer: state}) => {
    return {
        songList: state.response
    }
};

const mapDispatchToState = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToState)(SongModule);