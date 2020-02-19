import React from 'react';
import './RegisterPW.css';
import {InputGroup, FormControl} from 'react-bootstrap'

import suberimg from '../../imgs/SUBER.png'

class RegisterPW extends React.Component {
    state = {
        email: null
    };
    
    
    render() {
        return (
            <body>
                <div id="registerpw__menubar">
                    <div id="registerpw__logo">
                        <img id="registerpw__logo-img" src= { suberimg } />
                    </div>
                </div>
                
                <div id="registerpw__mainpage">
                    <div id="registerpw__container">
                        <div id="registerpw__textbox">
                            <h1>Let's get you set up</h1>
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

                        <button id="registerpw__findbox-search">
                            <a href="/#/guidesetup" class="fb-text-white" color='#ffffff'>Send a confirmation code</a>
                        </button>
                    </div>
                </div>
            </body>
        )
  }
}

export default RegisterPW;