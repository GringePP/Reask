import React from 'react';

export default class App extends React.Component {

    componentDidMount() {

    }

    render() {
        const {content} = this.props;
        return (
            <div>
                { content }
            </div>
        )
    }
}