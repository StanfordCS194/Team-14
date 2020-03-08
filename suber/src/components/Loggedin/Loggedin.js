import React from 'react';
import './Loggedin.css';

import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import suberimg from '../../imgs/SUBER.png'

const options_time = [
    { value: '0500', label: '05:00' },
    { value: '0530', label: '05:30' },
    { value: '0600', label: '06:00' },
    { value: '0630', label: '06:30' },
    { value: '0700', label: '07:00' },
    { value: '0730', label: '07:30' },
    { value: '0800', label: '08:00' },
    { value: '0830', label: '08:30' },
    { value: '0900', label: '09:00' }
];

const options_duration = [
    { value: '05', label: '0.5 hour' },
    { value: '10', label: '1 hour' },
    { value: '15', label: '1.5 hour' },
    { value: '20', label: '2 hour' },
    { value: '25', label: '2.5 hour' },
    { value: '30', label: '3 hour' },
    { value: '35', label: '3.5 hour' },
    { value: '40', label: '4 hour' },
    { value: '45', label: '4.5 hour' },
    { value: '50', label: '5 hour' }
];

const options_size = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
];

class Loggedin extends React.Component {
    state = {
        startDate: new Date(),
        startTime: null,
        duration: null,
        groupSize: null
    };
    
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    handleTimeChange = startTime => {
        this.setState(
            { startTime }
        );
    };

    handleDurationChange = duration => {
        this.setState(
            { duration }
        );
    };

    handleSizeChange = groupSize => {
        this.setState(
            { groupSize }
        );
    };

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
