import React from 'react';
import './Cancel.css';

import suberimg from '../../imgs/SUBER.png'

class Cancel extends React.Component {
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
                    <div id="cancel__container">
                        <div id="cancel__textbox">
                            <h1>Cancel Reservation?</h1>
                        </div>
                        <div id="cancel__info_text">
                            <div>We will let Collin know you can't make it.</div>
                            <div>Once you cancel the reservation, this cannot be undone.</div>
                        </div>
                        <div>
                            <a href="/#/cancel/confirmation">
                                <button id="cancel__findbox-search" type="submit" value="Submit">
                                    Cancel Reservation
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default Cancel;