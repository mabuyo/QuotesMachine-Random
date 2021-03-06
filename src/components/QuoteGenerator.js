import React, { Component } from "react";
import Button from "./Button";
import QuoteContainer from "./QuoteContainer";
import "../css/quote_generator.css";
import TiSocialTwitter from "react-icons/lib/ti/social-twitter";

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

    populateTweet() {
        const url =
            "https://twitter.com/intent/tweet?text='" +
            this.state.quote +
            "' -" +
            this.state.author +
            " #quotes";
        window.open(url, "_blank");
    }

    render() {
        return (
            <div className="main-content">
                <QuoteContainer
                    quote={this.state.quote}
                    author={this.state.author}
                />
                <div className="actions">
                    <Button
                        icon={<TiSocialTwitter size={30} />}
                        iconStyle={{
                            color: "#00aced"
                        }}
                        buttonStyle={"btn-transparent"}
                        onClick={this.populateTweet.bind(this)}
                    />
                    <Button
                        text="QuotesMachine.next()"
                        textStyle={{
                            color: "#2aa198",
                            fontFamily: "'Roboto Mono', monospace",
                            fontWeight: "bold"
                        }}
                        animate={true}
                        onClick={this.getRandomQuote.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default QuoteGenerator;
