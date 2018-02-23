import React from "react";
import StoreAwareComponent from "../StoreAware/StoreAwareComponent";
import DateCard from "../DateCard";
import Todo from "../Todo";

import './Dashboard.scss';

export default class Dashboard extends StoreAwareComponent {

    render() {
        return (
            <div className="dashboard">
                <div className="row">
                    <DateCard/>
                    <Todo/>
                </div>
            </div>
        )
    }

}