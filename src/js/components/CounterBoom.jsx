import React from "react";
import './CounterBoom.css';

const CounterBoom = (props) => {
    const seg = props.seconds.toString().padStart(2, "0");
    const min = props.minutes.toString().padStart(2, "0");
    const hor = props.hours.toString().padStart(2, "0");

    return (
        <div className="bomb-display">
            <div className="bomb-digit">{hor}</div>
            <div className="bomb-colon">:</div>
            <div className="bomb-digit">{min}</div>
            <div className="bomb-colon">:</div>
            <div className="bomb-digit">{seg}</div>
        </div>
    );
};
export default CounterBoom;