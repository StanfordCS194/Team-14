import React from 'react';
import axios from 'axios';
import './Tour.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Guidebox from './Guidebox';
import suberimg from '../../imgs/SUBER.png'

import { options_language, options_major } from '../Option/Option'


const options_time = [
    { value: 5, label: '05:00' },
    { value: 5.5, label: '05:30' },
    { value: 6, label: '06:00' },
    { value: 6.5, label: '06:30' },
    { value: 7, label: '07:00' },
    { value: 7.5, label: '07:30' },
    { value: 8, label: '08:00' },
    { value: 8.5, label: '08:30' },
    { value: 9, label: '09:00' },
    { value: 9.5, label: '09:30' },
    { value: 10, label: '10:00' },
    { value: 10.5, label: '10:30' },
    { value: 11, label: '11:00' },
    { value: 11.5, label: '11:30' },
    { value: 12, label: '12:00' },
    { value: 12.5, label: '12:30' },
    { value: 13, label: '13:00' },
    { value: 13.5, label: '13:30' },
    { value: 14, label: '14:00' }
];

const options_duration = [
    { value: 0.5, label: '0.5 hour' },
    { value: 1, label: '1 hour' },
    { value: 1.5, label: '1.5 hour' },
    { value: 2, label: '2 hour' },
    { value: 2.5, label: '2.5 hour' },
    { value: 3, label: '3 hour' },
    { value: 3.5, label: '3.5 hour' },
    { value: 4, label: '4 hour' },
    { value: 4.5, label: '4.5 hour' },
    { value: 5, label: '5 hour' }
];

const options_size = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
];


class Tour extends React.Component {
    state = {
        startDate: new Date(),
        startTime: null,
        duration: null,
        groupSize: null,
        guides: null,
        language: null
    }
    
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

    handleLanguageChange = language => {
        this.setState(
            { language }
        )
    }

    componentDidMount(){
        axios
            .get('/guides')
            .then((res) => {
                console.log(res.data);
                this.setState({
                    guides: res.data
                });
            })
            .catch(err => console.log(err.response));
    }

    ExampleCustomInput = ({ value, onClick }) => (
        <button className="custom-input" onClick={onClick}>
          {value}
        </button>
    )

    guidesMarkup = (guides) => guides ? (
        guides.slice(0, 8).map(guide => <Guidebox state={this.state} guide={guide} />)
    ) : (
        <p id="tour__loading_text">Loading...</p>
    )

    TourguideList = () => {
        const ExampleCustomInput = ({ value, onClick }) => (
            <button className="custom-input" onClick={onClick}>
              {value}
            </button>
        )

        return (
            <div id="tour__mainpage">
                <div className="split" id="tour__sidebar">
                    <div className="findbox">
                        <div className="fb-text">Tour Date</div>
                        <DatePicker id="date-picker"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            customInput={<ExampleCustomInput />}
                        />
                    </div>
                    <div className="findbox">
                        <div className="fb-text">Starting Time</div>
                        <Select
                            value={this.state.startTime}
                            onChange={this.handleTimeChange}
                            options={options_time}
                        />
                    </div>
                    <div className="findbox">
                        <div className="fb-text">Duration</div>
                        <Select
                            value={this.state.duration}
                            onChange={this.handleDurationChange}
                            options={options_duration}
                        />
                    </div>
                    <div className="findbox">
                        <div className="fb-text">Group Size</div>
                        <Select
                            value={this.state.groupSize}
                            onChange={this.handleSizeChange}
                            options={options_size}
                        />
                    </div>
                    <div className="findbox">
                        <div className="fb-text">Language</div>
                        <Select
                            options={options_language}
                            onChange={this.handleLanguageChange}
                        />
                    </div>
                    <div className="findbox">
                        <div className="fb-text">Major</div>
                        <Select
                            options={options_major}
                        />
                    </div>
                    <button id="tour__findbox-search">
                            <p className="fb-text-white">Filter Result</p>
                    </button>
                </div>
                <div className="split" id="guide-list">
                    {this.guidesMarkup(this.state.guides)}
                </div>
            </div>
        );
    }

    render() {
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
                {this.TourguideList()}
            </body>
        )
    }
}

export default Tour;