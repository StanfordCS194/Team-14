import React from 'react';
import './Login.css';

import suberimg from '../../imgs/SUBER.png'

class Login extends React.Component {
    state = {
        email: null
    };
    
    render() {
        return (
            <body>
                <div id="login__menubar">
                    <a id="login__logo" href="/#/">
                        <img id="login__logo-img" src= { suberimg } />
                    </a>
                </div>
                
                <div id="login__mainpage">
                    <div id="login__container">
                        <div id="login__textbox">
                            <h1>Tour Guide Sign In</h1>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <label id="login__stanford_email">
                                    <p class="login__category_text">Stanford Email</p>
                                    <input id="login__findbox-input" type="text" value={this.state.value} onChange={this.handleChange} />
                                </label>
                            </form>
                            <form onSubmit={this.handleSubmit}>
                                <label id="login__stanford_email">
                                    <p class="login__category_text">Password</p>
                                    <input id="login__findbox-input" type="password" value={this.state.value} onChange={this.handleChange} />
                                </label>
                            </form>
                            <a href="/#/loggedin">
                                <button id="login__findbox-search" type="submit" value="Submit">
                                    Sign In
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default Login;