import React from "react";
import PropTypes from 'prop-types';

export default class StoreAwareComponent extends React.Component {

    static contextTypes = {
        store: PropTypes.object
    };

    componentWillMount() {
        this.store = this.context.store;
    }

}