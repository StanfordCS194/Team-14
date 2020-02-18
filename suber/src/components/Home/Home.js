import React from 'react';
import './Home.css';

import DatePicker from "react-datepicker";
import Select from "react-select";

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

class Home extends React.Component {
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
        return (
            <body>
                <div id="menubar">
                    <div id="guide-login">
                        <p>Already a suber guide?</p>
                    </div>
                    <div id="logo">
                        <img id="logo-img" src= { suberimg } />
                    </div>
                    <div id="guide-signup">
                        <a href = "/#/register">Register Now</a>
                    </div>
                </div>
                <div id="mainpage">
                    <div id="container">
                        <div id="textbox">
                            <h1>Find a personal guide for</h1>
                            <h1>Stanford University</h1>
                        </div>
                        <div id="findbox-date">
                            <div class="tour__fb-text">Tour Date</div>
                            <DatePicker id="date-picker"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div id="findbox-time-duration">
                            <div id="findbox-time">
                                <div class="fb-text">Starting Time</div>
                                <Select
                                    value={this.state.startTime}
                                    onChange={this.handleTimeChange}
                                    options={options_time}
                                />
                            </div>
                            <div id="findbox-duration">
                                <div class="fb-text">Duration</div>
                                <Select
                                    value={this.state.duration}
                                    onChange={this.handleDurationChange}
                                    options={options_duration}
                                />
                            </div>
                        </div>
                        <div id="findbox-size">
                            <div class="fb-text">Group Size</div>
                            <Select
                                value={this.state.groupSize}
                                onChange={this.handleSizeChange}
                                options={options_size}
                            />
                        </div>
                        <div id="findbox-size">
                            <div class="fb-text-red">Find an Existing Reservation</div>
                        </div>
                        <button id="findbox-search">
                            <a href="/#/tour" class="fb-text-white">Find a Tour Guide</a>
                        </button>
                    </div>
                </div>
            </body>
        )
  }
}

export default Home;