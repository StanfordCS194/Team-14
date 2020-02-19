import React from 'react';
import './Welcome.css';
import {InputGroup, FormControl} from 'react-bootstrap'

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
                            <h1>Welcome</h1>
                        </div>
                        <button id="welcome__findbox-search">
                            <a href="/#/loggedin" class="welcome__fb-text-white" color='#ffffff'>Home</a>
                        </button>
                    </div>
                </div>
            </body>
        )
  }
}

export default Welcome;