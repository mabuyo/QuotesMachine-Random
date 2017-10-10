import React, { Component } from "react";
import "../css/quote_container.css";

class QuoteContainer extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="quote-text">{this.props.quote}</h1>
                <p className="quote-author">{this.props.author}</p>
            </div>
        );
    }
}

export default QuoteContainer;
