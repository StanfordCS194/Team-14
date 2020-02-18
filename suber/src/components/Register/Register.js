import React from 'react';
import './Register.css';
import {InputGroup, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import suberimg from '../../imgs/SUBER.png'

class Register extends React.Component {
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
                
                <div id="mainpage">
                    <div id="container">
                        <div id="textbox">
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
                            <InputGroup.Text id="basic-addon2">@stanford.edu</InputGroup.Text>
                            </InputGroup.Append>
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

export default Register;