import React from 'react';
import './Cancelconfirmation.css';

import suberimg from '../../imgs/SUBER.png'

class Cancelconfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            value: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    
    render() {
        return (
            <body>
                <div id="cancel__menubar">
                    <a id="cancel__logo" href="/#/">
                        <img id="cancel__logo-img" src= { suberimg } />
                    </a>
                </div>
                
                <div id="cancel__mainpage">
                    <div id="cancelconfirmation__container">
                        <div id="cancel__textbox">
                            <h1>Cancel Confirmed!</h1>
                        </div>
                        <div>
                            <a href="/#/">
                                <button id="cancel__findbox-search" type="submit" value="Submit">
                                    Go Back Home
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default Cancelconfirmation;