import React from 'react';
import './Welcome.css';

import suberimg from '../../imgs/SUBER.png'

class Welcome extends React.Component {
    state = {
        email: null
    };
    
    
    render() {
        return (
            <body>
                <div id="welcome__menubar">
                    <a id="welcome__logo" href="/#/">
                        <img id="welcome__logo-img" src= { suberimg } />
                    </a>
                </div>
                
                <div id="welcome__mainpage">
                    <div id="welcome__container">
                        <div id="welcome__textbox">
                            <h1>Welcome!</h1>
                        </div>
                        <a href="/#/loggedin" >
                            <button id="welcome__findbox-search">
                                <p class="welcome__fb-text-white" color='#ffffff'>Go To Account</p>
                            </button>
                        </a>
                    </div>
                </div>
            </body>
        )
  }
}

export default Welcome;