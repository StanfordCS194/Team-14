import React from 'react';
import axios from 'axios';
import './Tour.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Guidebox from './Guidebox';
import suberimg from '../../imgs/SUBER.png'
// import './Tourguide.css';

import StarRatings from "react-star-ratings";

import mapimg from '../../imgs/sample-map.png';

import { options_language, options_major } from '../Option/Option'


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


class Tour extends React.Component {
    state = {
        page: 1,
        startDate: new Date(),
        startTime: null,
        duration: null,
        groupSize: null,
        guides: null,
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

    nextPage = () => {
        console.log("Page changed.")
        this.setState({
            page: 2 
        })
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

    PageChange = (param) => {
        switch (param) {
            case 1:
                return this.TourguideList();
            case 2:
                return this.Tourguide();
        }
    }

    Tourguide = () => {
        return (
            <div id="tourguide_tour__mainpage">
                <div className="split" id="tourguide_sidebar">
                    <div id="tourguide_guide_img_container">
                        <img id="tourguide_guide_img" 
                            src= { require('../../imgs/default-profile-picture1.jpg') } 
                            width='300px' />
                    </div>
                    <div className="guide-text">
                        <div className="tourguide__guide_name">
                            <b>Collin</b>
                        </div>
                        <div className="tourguide__guide_description">
                            <p>
                                <b>Languages: </b>English, Korean
                            </p>
                        </div>
                        <div className="tourguide__guide_description">
                            <p>
                                <b>Major: </b>Electrical Engineering
                            </p>
                        </div>
                        <div className="tourguide__guide_description">
                            <p>
                                <b>Rate: </b>$60/hr
                            </p>
                        </div>
                        <div className="tourguide__guide_bio">
                            <p>
                                Hello, I’m Collin, a junior studying EE. I’m 
                                from Korea. I’m also involved in various
                                on-campus organizations related to tech. I’m
                                also part of an on-campus greek community.
                            </p>
                        </div>
                        <div>
                            <p id="tourguide__guide_review" ><b>Review</b></p>
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
                <div className="split" id="tourguide__tour_details">
                    <div id="tourguide__detail_text">Selected Tour Details</div>
                    <div>
                        <p>
                            <div className="tourguide__detail_details_1">Date/Time:&nbsp;</div>
                            <div className="tourguide__detail_details_2">November 20, 2020, 8:30 AM - 9:00 AM</div>
                        </p>
                        <p>
                            <div className="tourguide__detail_details_1">Total Price:&nbsp;</div>
                            <div className="tourguide__detail_details_2">$30</div>
                        </p>
                        <p>
                            <div className="tourguide__detail_details_1">Meetup Place:&nbsp;</div>
                            <div className="tourguide__detail_details_2">Main Quad</div>
                        </p>
                        <p>
                            <div className="tourguide__detail_details_1">Tour Group Size:&nbsp;</div>
                            <div className="tourguide__detail_details_2">5</div>
                        </p>
                        <p>
                            <div className="tourguide__detail_details_1">Language:&nbsp;</div>
                            <div className="tourguide__detail_details_2">Chinese (Mandarin)</div>
                        </p>
                    </div>
                    <div id="tourguide__recommended_course">
                        <p id="tourguide__recommended_course_text">Collin's Recommended Tour Course</p>
                        <div className="tourguide__recommended_course_box">
                            <div className="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Meet at the Main Quad</div>
                        </div>
                        <div className="tourguide__recommended_course_box">
                            <div className="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Visit the Memorial Church</div>
                        </div>
                        <div className="tourguide__recommended_course_box">
                            <div className="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Tour the Cantor Arts Center</div>
                        </div>
                        <div className="tourguide__recommended_course_box">
                            <div className="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Walk aroun the Engineering Quad</div>
                        </div>
                        <div className="tourguide__recommended_course_box">
                            <div className="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;(Optional) Coffee Chat at Coupa Cafe</div>
                        </div>
                        <div className="tourguide__recommended_course_box">
                            <div className="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Stanford Bookstore</div>
                        </div>
                        <div className="tourguide__recommended_course_box">
                            <div className="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Tresidder Memorial Union</div>
                        </div>
                    </div>
                    <a href="/#/tour">
                        <div className="tourguide__button">
                            <p className="tourguide__btn_text">Back to list</p>
                        </div>
                    </a>
                    <a href="/#/reservation/confirmation">
                        <div className="tourguide__button">
                            <p className="tourguide__btn_text">Select Tour Guide</p>
                        </div>
                    </a>
                </div>
                <div className="split" id="tourguide__tour_map">
                    <img src={ mapimg } width='550px' height='850px' className="tour_map"/>
                </div>
            </div>
        );
    }

    ExampleCustomInput = ({ value, onClick }) => (
        <button className="custom-input" onClick={onClick}>
          {value}
        </button>
    )

    guidesMarkup = (guides) => guides ? (
        guides.map(guide => <Guidebox nextPage={this.nextPage} guide={guide}/>)
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
                {this.PageChange(this.state.page)}
            </body>
        )
    }
}

export default Tour;