import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import StoreAwareComponent from "../StoreAware/StoreAwareComponent";
import Dialog from "../Dialog";
import AddWindow from "../SongModule/AddWindow";
import SongModule from "../SongModule";
import Desert from "../Desert";
import Navbar from "../Nav";
import Dashboard from "../Dashboard";

export default class App extends StoreAwareComponent {

    render() {
        return (
            <div className='app'>
                <Navbar />
                <Switch>
                    <Route path="/song" component={SongModule} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/404" component={Desert} />
                    <Redirect to={{ pathname: '/404' }} />
                </Switch>
                <Dialog content={<AddWindow />} />
            </div>
        )
    }
}