import React from 'react';
import './Tour.css';

import DatePicker from "react-datepicker";
import Select from "react-select";
import StarRatings from "react-star-ratings";

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
    { value: '6', label: '6' }
];

const options_language = [
    { value: '1', label: 'English' },
    { value: '2', label: 'Spanish' },
    { value: '3', label: 'Chinese' },
    { value: '4', label: 'Japanese' },
    { value: '5', label: 'Korean' },
    { value: '6', label: 'Hindi' }
];

const options_major = [
    { value: '1', label: 'Computer Science' },
    { value: '2', label: 'Engineering' },
    { value: '3', label: 'Social Sciences' },
    { value: '4', label: 'Humanities' },
    { value: '5', label: 'Other' }
];

class Tour extends React.Component {
    state = {
        startDate: new Date(),
        startTime: null,
        duration: null,
        groupSize: null,
        rating: 4,
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
            <button class="custom-input" onClick={onClick}>
              {value}
            </button>
        );

        return (
            <body>
                <div id="menubar">
                    <div id="guide-login">
                        <p>Already a suber guide?</p>
                    </div>
                    <a id="logo" href="/#/">
                        <img id="logo-img" src= { suberimg } />
                    </a>
                    <div id="guide-signup">
                        <a id="guide_signup_link" href="/#/register">Register Now</a>
                    </div>
                </div>
                <div id="tour__mainpage">
                    <div class="split" id="sidebar">
                        <div class="findbox">
                            <div class="fb-text">Tour Date</div>
                            <DatePicker id="date-picker"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                customInput={<ExampleCustomInput />}
                            />
                        </div>
                        <div class="findbox">
                            <div class="fb-text">Starting Time</div>
                            <Select
                                value={this.state.startTime}
                                onChange={this.handleTimeChange}
                                options={options_time}
                            />
                        </div>
                        <div class="findbox">
                            <div class="fb-text">Duration</div>
                            <Select
                                value={this.state.duration}
                                onChange={this.handleDurationChange}
                                options={options_duration}
                            />
                        </div>
                        <div class="findbox">
                            <div class="fb-text">Group Size</div>
                            <Select
                                value={this.state.groupSize}
                                onChange={this.handleSizeChange}
                                options={options_size}
                            />
                        </div>
                        <div class="findbox">
                            <div class="fb-text">Language</div>
                            <Select
                                options={options_language}
                            />
                        </div>
                        <div class="findbox">
                            <div class="fb-text">Major</div>
                            <Select
                                options={options_major}
                            />
                        </div>
                    </div>
                    <div class="split" id="guide-list">
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <a class="guide-name" href="/#/tourguide">
                                    <b>Collin</b>
                                </a>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <a class="guide-name" href="/#/tourguide">
                                    <b>Collin</b>
                                </a>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <a class="guide-name" href="/#/tourguide">
                                    <b>Collin</b>
                                </a>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <a class="guide-name" href="/#/tourguide" >
                                    <b>Collin</b>
                                </a>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <a class="guide-name" href="/#/tourguide">
                                    <b>Collin</b>
                                </a>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                        <div class="guidebox">
                            <div class="guide-image"></div>
                            <div class="guide-text">
                                <a class="guide-name" href="/#/tourguide">
                                    <b>Collin</b>
                                </a>
                                <div class="guide-language">
                                    <p>
                                        <b>Languages: </b>English, Korean
                                    </p>
                                </div>
                                <div class="guide-major">
                                    <p>
                                        <b>Major: </b>Electrical Engineering
                                    </p>
                                </div>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="#FEB156"
                                    numberOfStars={5}
                                    name='rating'
                                    class='ratings'
                                    starDimension='25px'
                                    starSpacing='1px'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default Tour;