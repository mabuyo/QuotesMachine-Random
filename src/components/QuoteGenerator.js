import React, { Component } from "react";
import ShareButtons from "./ShareButtons";
import Button from "./Button";
import QuoteContainer from "./QuoteContainer";
import "../css/quote_generator.css";

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
            <div>
                <QuoteContainer
                    quote={this.state.quote}
                    author={this.state.author}
                />
                <div className="actions">
                    <ShareButtons />
                    <Button
                        text="Give me another quote"
                        onClick={this.getRandomQuote.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default QuoteGenerator;
