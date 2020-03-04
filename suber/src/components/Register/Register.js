import React from 'react';
import './Register.css';
import {InputGroup, FormControl} from 'react-bootstrap'

import suberimg from '../../imgs/SUBER.png'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
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
        localStorage.setItem('newUserEmail', this.state.email + '@stanford.edu');
        this.props.history.push('/registerpw');
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
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
                            <form onSubmit={this.handleSubmit}>
                                <label id="register__stanford_email">
                                    <input id="register__findbox-input" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                                    &nbsp;@stanford.edu
                                </label>
                                <button id="search__findbox-search" type="submit" value="Submit">
                                    Send a confirmation code
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default Register;