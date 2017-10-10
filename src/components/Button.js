import React from "react";
import "../css/button.css";

const Button = props => {
    return (
        <button
            className={
                props.animate
                    ? `button ${props.buttonStyle}`
                    : "btn-transparent"
            }
            onClick={props.onClick}
        >
            <span style={props.iconStyle}>{props.icon}</span>
            <span style={props.textStyle}>{props.text}</span>
        </button>
    );
};

export default Button;
