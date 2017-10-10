import React from "react";
import TiSocialTwitter from "react-icons/lib/ti/social-twitter";

const ShareButtons = props => {
    return <a href={props.link}><TiSocialTwitter size={40} /></a>;
};

export default ShareButtons;
