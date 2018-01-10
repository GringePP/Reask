import { TOGGLE_DIALOG } from "../actions";

let visible = false;

export default function reducer(state = {}, action) {
    switch (action.type) {
        case TOGGLE_DIALOG:
            visible = !visible;
            return {
                type: action.type,
                visible: visible
            };
        default:
            return state;
    }
}