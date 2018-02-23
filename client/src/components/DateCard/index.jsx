import React from "react";
import './DateCard.scss';

export default () => {
    const date = new Date();
    return (
        <div className="date-card card">
            { date.getDate() }
        </div>
    )
}


