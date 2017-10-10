import React from "react";
import "../css/button.css";

const Button = props => {
    return (
        <button
            className="button"
            onClick={() => console.log("button clicked")}
        >
            {props.text}
        </button>
    );
};

export default Button;
