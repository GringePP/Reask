import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import StoreAwareComponent from "../StoreAware/StoreAwareComponent";
import Dialog from "../Dialog";
import AddWindow from "../SongModule/AddWindow";
import SongModule from "../SongModule";
import Desert from "../Desert";

export default class App extends StoreAwareComponent {

    render() {
        return (
            <div className='app'>
                <Switch>
                    <Route path="/" exact component={ SongModule }/>
                    <Route path="/404" component={ Desert }/>
                    <Redirect to={ { pathname: '/404' } }/>
                </Switch>
                <Dialog content={ <AddWindow/> }/>
            </div>
        )
    }
}