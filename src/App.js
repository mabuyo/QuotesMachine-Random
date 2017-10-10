import React, { Component } from "react";
import QuoteContainer from "./components/QuoteContainer";
import ShareButtons from "./components/ShareButtons";
import Button from "./components/Button";
import "./css/app.css";

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <QuoteContainer />
                <div className="actions">
                    <ShareButtons />
                    <Button text="Give me another quote" />
                </div>
            </div>
        );
    }
}

export default App;
