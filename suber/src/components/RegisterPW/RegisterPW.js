import React from 'react';
import './RegisterPW.css';
import {InputGroup, FormControl} from 'react-bootstrap';

import suberimg from '../../imgs/SUBER.png';

class RegisterPW extends React.Component {
    constructor() {
        super();
        this.state = {
            password: '',
            errors: {}
        };
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('newUserPW', this.state.password);
        this.props.history.push('/guidesetup');
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
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
                                <label id="register__password">
                                    <p id="registerpw__password_text">Password</p>
                                    <input id="registerpw__findbox-input" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                                </label>
                                <button id="search__findbox-search" type="submit" value="Submit">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default RegisterPW;

