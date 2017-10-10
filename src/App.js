import React, { Component } from "react";
import QuoteGenerator from "./components/QuoteGenerator";
import ShareButtons from "./components/ShareButtons";
import Button from "./components/Button";
import "./css/app.css";

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <QuoteGenerator />
                <div className="actions">
                    <ShareButtons />
                    <Button text="Give me another quote" />
                </div>
                <div className="footer">
                    <p>
                        API from {" "}
                        <a href="http://quotes.stormconsultancy.co.uk/api">
                            Storm Consultancy
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
