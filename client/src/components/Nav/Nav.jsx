import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss';

export default class Nav extends React.Component {

    render() {
        return (
            <div className="nav">
                <div className="wrapper">
                    <div className="title">
                        <img className="icon" />
                        <p className="name">Reask</p>
                    </div>
                    <ul>
                        {
                            ['dashboard', 'song', '404'].map((item, index) => {
                                return (<li key={index}>
                                    <NavLink
                                        to={{ pathname: `/${item}` }}
                                        activeClassName="link-active"
                                        className="link-normal">
                                        {item}
                                    </NavLink>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}