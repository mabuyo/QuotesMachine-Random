import React, { Component } from "react";
import QuoteContainer from "./QuoteContainer";

class QuoteGenerator extends Component {
    constructor() {
        super();
        this.state = { quote: "", author: "" };
    }
    componentWillMount() {
        this.getRandomQuote();
    }

    getRandomQuote() {
        const url = "http://quotes.stormconsultancy.co.uk/random.json";
        fetch(url).then(response => response.json()).then(response => {
            this.setState({ quote: response.quote, author: response.author });
        });
    }

    render() {
        return (
            <QuoteContainer
                quote={this.state.quote}
                author={this.state.author}
            />
        );
    }
}

export default QuoteGenerator;
