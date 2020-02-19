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
                    <a id="logo" href="/#/">
                        <img id="logo-img" src= { suberimg } />
                    </a>
                </div>
                
                <div id="registerpw__mainpage">
                    <div id="registerpw__container">
                        <div id="registerpw__textbox">
                            <h1>Let's get you set up</h1>
                        </div>

                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    <p id="registerpw__password_text">Password</p>
                                    <input id="registerpw__findbox-input" type="password" value={this.state.value} onChange={this.handleChange} />
                                </label>
                            </form>
                            <a href="/#/guidesetup">
                                <button id="search__findbox-search" type="submit" value="Submit">
                                    Register
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default RegisterPW;