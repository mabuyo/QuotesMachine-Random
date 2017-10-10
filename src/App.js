import React, { Component } from "react";
import QuoteGenerator from "./components/QuoteGenerator";
import "./css/app.css";

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <QuoteGenerator />
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
