import React, { Component } from "react";
import "../css/quote_container.css";

class QuoteContainer extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="quote-text">Quote goes here</h1>
                <p className="quote-author">Author Name</p>
            </div>
        );
    }
}

export default QuoteContainer;
