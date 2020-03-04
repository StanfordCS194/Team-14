import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

import suberimg from '../../imgs/SUBER.png'

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
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
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData, this.props.history);
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    render() {
        //const { classes, UI: { loading }} = this.props;
        const { errors } = this.state;
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
                                    <input id="login__findbox-input" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                                </label>
                                <label id="login__password">
                                    <p class="login__category_text">Password</p>
                                    <input id="login__findbox-input" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                                </label>
                                <button id="login__findbox-search" type="submit" value="Submit">
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

Login.propTypes = {
    //classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(Login);