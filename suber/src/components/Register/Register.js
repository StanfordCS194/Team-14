import React from 'react';
import './Register.css';
import {InputGroup, FormControl} from 'react-bootstrap'

import suberimg from '../../imgs/SUBER.png'

class Register extends React.Component {
    state = {
        email: null
    };
    
    
    render() {
        return (
            <body>
                <div id="register__menubar">
                    <a id="register__logo" href="/#/">
                        <img id="register__logo-img" src= { suberimg } />
                    </a>
                </div>
                
                <div id="register__mainpage">
                    <div id="register__container">
                        <div id="register__textbox">
                            <h1>Verify your student email</h1>
                        </div>
                        
                        <div>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter your email here"
                                aria-label="Enter your email here"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <InputGroup.Text id="register__basic-addon2">@stanford.edu</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </div>
                        <button id="register__findbox-search">
                            <a href="/#/register" class="register__fb-text-white" color='#ffffff'>Send a confirmation code</a>
                        </button>
                    </div>
                </div>
            </body>
        )
  }
}

export default Register;