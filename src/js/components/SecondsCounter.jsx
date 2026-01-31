import React from "react";
import './SecondsCounter.css';

//create your first component
const SecondsCounter = (props) => {
    const seg = props.seconds.toString().padStart(2, "0");
    const min = props.minutes.toString().padStart(2, "0");
    const hor = props.hours.toString().padStart(2, "0");

    return (
        <div className="bigCounter">
            <span className="pCounter">{hor}</span>
            <span>:</span>
            <span className="pCounter">{min}</span>
            <span>:</span>
            <span className="pCounter">{seg}</span>
        </div>
    );
};

export default SecondsCounter;