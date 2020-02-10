import React from 'react';
import './Landing.css';

class Landing extends React.Component {
  render() {
    return (
        <body>
            <div id="menubar">
                <div id="guide-login">
                    <p>Already a suber guide?</p>
                </div>
                <div id="logo">
                    <img src={ require('./imgs/SUBER.png') } height="40" />
                </div>
                <div id="guide-signup">
                        <p>Register Now</p>
                </div>
            </div>
            <div id="mainpage">
                <div id="container">
                    <div id="textbox">
                        <p>Find a personal guide for</p>
                        <p>Stanford University</p>
                    </div>
                </div>
            </div>
        </body>
    )
  }
}

export default Landing;