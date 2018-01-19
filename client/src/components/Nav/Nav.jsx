import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss';

export default class Nav extends React.Component {

    render() {
        return (
            <div className="nav">
                <ul>
                    {
                        ['song','home','404'].map((item, index) => {
                            return(<li key={index}>
                                <NavLink to={ { pathname: `/${item}` } } activeClassName="link-active">
                                    {item}
                                </NavLink>
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}