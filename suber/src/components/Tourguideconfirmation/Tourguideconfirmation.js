import React from 'react';
import './Tourguideconfirmation.css';
import {Link} from 'react-router-dom';

import suberimg from '../../imgs/SUBER.png'

class Tourguideconfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    
    render() {
        console.log(this.props)

        return (
            <body>
                <div id="cancel__menubar">
                    <a id="cancel__logo" href="/#/">
                        <img id="cancel__logo-img" src= { suberimg } />
                    </a>
                </div>
                
                <div id="cancel__mainpage">
                    <div id="cancelconfirmation__container">
                        <div id="tourguideconfirmation__textbox">
                            <h1>Enter your Email Address to Confirm</h1>
                        </div>
                                <label id="register__stanford_email">
                                    <input id="register__findbox-input" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                                </label>
                        <div>
                            <Link to={{
                                pathname: '/confirmation',
                                state: this.props,
                                email: this.state.email
                            }}>
                                <button id="cancel__findbox-search" type="submit" value="Submit">
                                    Yes, confirm reservation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default Tourguideconfirmation;