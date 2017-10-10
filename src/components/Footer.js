import React from "react";
import "../css/footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <p>
                API from {" "}
                <a href="http://quotes.stormconsultancy.co.uk/api">
                    Storm Consultancy
                </a>
                {" | "}
                Made by <a href="http://michellemabuyo.me">
                    Michelle Mabuyo
                </a>
            </p>
        </div>
    );
};

export default Footer;
