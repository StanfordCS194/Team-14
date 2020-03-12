import React from 'react';
import axios from 'axios';
import './Tour.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Guidebox from './Guidebox';
import suberimg from '../../imgs/SUBER.png'

import { options_language, options_major, options_time, options_duration, options_size } from '../Option/Option'

class Tour extends React.Component {

    state = {
        startDate: new Date(),
        startTime: null,
        duration: null,
        groupSize: null,
        guides: null,
        all_guides: null,
        language: null,
        major: null
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

    handleMajorChange = major => {
        this.setState(
            { major }
        )
    }

    componentDidMount(){
        axios
            .get('/guides')
            .then((res) => {
                console.log(res.data);
                let guides = res.data
                console.log(guides)
                this.setState({
                    guides: guides,
                    all_guides: guides
                });
            })
            .catch(err => console.log(err.response));
    }

    filterResult = () => {
        if (this.state.major || this.state.language || this.state.startTime) {
            var guides = this.state.all_guides
            if (this.state.major) {
                guides = guides.filter(guide => guide.major.includes(this.state.major.label))
            }
            if (this.state.language) {
                guides = guides.filter(guide => guide.language.includes(this.state.language.label))
            }
            if (this.state.startTime) {
                var guideTimeMap = new Map()
                for (let index = 0; index < guides.length; index++) {
                    if (guides[index].schedule) {
                        var guide = guides[index]
                        var availableTimes = []
                        for (let j = 0; j < guide.schedule.length; j++) {
                            availableTimes.push(new Date(guide.schedule[j]))
                        }
                        guideTimeMap.set(guide, availableTimes)
                    }
                }
                var startDate = this.state.startDate
                var startTime = this.state.startTime
                var clientDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(),
                                            parseInt(startTime.label.slice(0, 2)), 0, 0)
                var clientTime = clientDate.toISOString()
                console.log(clientTime)
                guides = guides.filter(guide => guide.schedule)
                console.log(guides)
                guides = guides.filter(guide =>
                    guide.schedule.includes(clientTime)    
                )
            }

            this.setState({
                guides: guides,
            })
        }
    }

    clearFilter() {
        window.location.reload(true);
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
                            value={this.state.major}
                            options={options_major}
                            onChange={this.handleMajorChange}
                        />
                    </div>
                        <button id="tour__findbox-search" onClick={this.filterResult}>
                                <p className="fb-text-white">Filter Result</p>
                        </button>
                        <button id="tour__findbox-clear" onClick={this.clearFilter}>
                                <p className="fb-text-white">Clear Filter</p>
                        </button>
                </div>
                <div className="split" id="guide-list">
                    {this.guidesMarkup(this.state.guides)}
                </div>
            </div>
        );
    }

    render() {
        console.log(this.props)
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
                        <a id="guide_signup_link" href="/#/register">Register Now</a>
                    </div>
                </div>
                {this.TourguideList()}
            </body>
        )
    }
}

export default Tour;