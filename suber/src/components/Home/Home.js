import React from 'react';
import './Home.css';

import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import suberimg from '../../imgs/SUBER.png'
import {options_time, options_duration, options_size} from '../Option/Option'

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
        const ExampleCustomInput = ({ value, onClick }) => (
            <button class="home-custom-input" onClick={onClick}>
              {value}
            </button>
        );

        return (
            <body>
                <div id="menubar">
                    <div id="guide-login">
                        <a id="guide_login_link" href="/#/login">Already a suber guide?</a>
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
                        <div id="textbox">
                            <h1>Find a personal guide for</h1>
                            <h1>Stanford University</h1>
                        </div>
                        <div id="findbox-date">
                            <div class="tour__fb-text">Tour Date</div>
                            <DatePicker id="date-picker"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                customInput={<ExampleCustomInput />}
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
                            <a href="/#/search" class="fb-text-red">Find an Existing Reservation</a>
                        </div>
                        <a href="/#/tour">
                            <button id="findbox-search">
                                <p class="fb-text-white">Find a Tour Guide</p>
                            </button>
                        </a>
                    </div>
                </div>
            </body>
        )
  }
}

export default Home;