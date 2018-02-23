import React from "react";
import StoreAwareComponent from "../StoreAware/StoreAwareComponent";

import './Todo.scss';

export default class Todo extends StoreAwareComponent {

    render() {
        return (
            <div className="todo card">
                <div className="todo-item">To do something.</div>
                <div className="todo-item">To do something.</div>
                <div className="todo-item">To do something.</div>
                <div className="todo-item">To do something.</div>
            </div>
        )
    }
}