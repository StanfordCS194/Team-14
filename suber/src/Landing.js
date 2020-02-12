import React from 'react';
import './Landing.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";


const options_time = [
    { value: '0500', label: '05:00' },
    { value: '0530', label: '05:30' },
];

const options_duration = [
    { value: '0500', label: '0.5 hour' },
    { value: '0530', label: '1 hour' },
];

const options_size = [
    { value: '0500', label: '1' },
    { value: '0530', label: '2' },
];

class Landing extends React.Component {
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
                        <img id="logo-img" src= { require('./imgs/SUBER.png') } />
                    </div>
                    <div id="guide-signup">
                        <p>Register Now</p>
                    </div>
                </div>
                <div id="mainpage">
                    <div id="container">
                        <div id="textbox">
                            <h1>Find a personal guide for</h1>
                            <h1>Stanford University</h1>
                        </div>
                        <div id="findbox-date">
                            <div class="fb-text">Tour Date</div>
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
                            <div class="fb-text-red">Search Your Reservation</div>
                        </div>
                        <div id="findbox-search">
                            <div class="fb-text-white">Find a Tour Guide</div>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default Landing;