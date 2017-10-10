import React from "react";
import "../css/button.css";

const Button = props => {
    return (
        <button className="button" onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Button;
