import { connect } from "react-redux";
import Dialog from "./Dialog";
import { TOGGLE_DIALOG } from "../../redux/actions";
import React from "react";

const mapStateToProps = ({dialogReducer: state}) => {
    if (state.type === TOGGLE_DIALOG) {
        return {
            visible: state.visible,
        }
    } else {
        return {
            visible: false,
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => dispatch({type: TOGGLE_DIALOG})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);