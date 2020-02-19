import React from 'react';
import './GuideSetup.css';
import {InputGroup, FormControl} from 'react-bootstrap'

import suberimg from '../../imgs/SUBER.png'

class GuideSetup extends React.Component {
    state = {
        email: null
    };
    
    
    render() {
        return (
            <body>
                <div id="menubar">
                    <div id="logo">
                        <img id="logo-img" src= { suberimg } />
                    </div>
                </div>
                
                <div id="mainbox">
                    <div id="container">
                        <div id="textbox">
                            <h1>Shit</h1>
                        </div>
                        
                        <div>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>

                        <button id="findbox-search">
                            <a href="/#/register" class="fb-text-white" color='#ffffff'>Send a confirmation code</a>
                        </button>
                    </div>
                </div>
            </body>
        )
  }
}

export default GuideSetup;