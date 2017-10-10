import React from "react";
import "../css/button.css";

const Button = props => {
    return <a className="button">{props.text}</a>;
};

export default Button;
