import React, { Component } from "react";
import QuoteGenerator from "./components/QuoteGenerator";
import Footer from "./components/Footer";
import "./css/app.css";

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <h1 className="title">QuotesMachine.random()</h1>
                <QuoteGenerator />
                <Footer />
            </div>
        );
    }
}

export default App;
