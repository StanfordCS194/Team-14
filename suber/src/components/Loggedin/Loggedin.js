import React from 'react';
import './Loggedin.css';

import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import suberimg from '../../imgs/SUBER.png'

class Loggedin extends React.Component {
    render() {
        const ExampleCustomInput = ({ value, onClick }) => (
            <button class="home-custom-input" onClick={onClick}>
              {value}
            </button>
        );

        return (
            <body>
                <div id="menubar">
                    <div id="guide-login">
                        <p></p>
                    </div>
                    <a id="logo" href="/#/">
                        <img id="logo-img" src= { suberimg } />
                    </a>
                    <div id="guide-signup">
                        <a id="guide_signup_link" href = "/#/register">Register Now</a>
                    </div>
                </div>
                <div id="mainpage">
                    <div id="container">
                        <div id="loggedin__textbox">
                            <h1>Manage Your Profile</h1>
                        </div>
                        <a href="/#/tour">
                            <button id="loggedin__navigation_button">
                                <p class="loggedin__fb-text-white">Update Personal Information</p>
                            </button>
                        </a>
                        <a href="/#/updateavailability">
                            <button id="loggedin__navigation_button">
                                <p class="loggedin__fb-text-white">Update Availability</p>
                            </button>
                        </a>
                        <a href="/#/tour">
                            <button id="loggedin__navigation_button">
                                <p class="loggedin__fb-text-white">Update Tour Information</p>
                            </button>
                        </a>
                        <a href="/#/viewreservation">
                            <button id="loggedin__navigation_button">
                                <p class="loggedin__fb-text-white">View Reservation</p>
                            </button>
                        </a>
                        <a href="/#/">
                            <div id="loggedin__signout">Sign Out</div>
                        </a>
                    </div>
                </div>
            </body>
        )
  }
}

export default Loggedin;
