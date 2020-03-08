import React from 'react';
import './Tourguide.css';

import StarRatings from "react-star-ratings";

import suberimg from '../../imgs/SUBER.png';
import mapimg from '../../imgs/sample-map.png';

class Tourguide extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/tour")
        }
    }

    state = {
        startDate: new Date(),
        startTime: null,
        duration: null,
        groupSize: null,
        rating: 4.0,
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
        const { location } = this.props;

        if (location.state) {
            console.log(location)
            return (
                <body>
                    <div id="tourguide_menubar">
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
                    <div id="tourguide_tour__mainpage">
                        <div class="split" id="tourguide_sidebar">
                        <div id="tourguide_guide_img_container">
                                <img id="tourguide_guide_img" 
                                     src= { require('../../imgs/default-profile-picture1.jpg') } 
                                     width='300px' />
                            </div>
                            <div class="guide-text">
                                <div class="tourguide__guide_name">
                                    <b>{location.state.guide.firstName}</b>
                                </div>
                                <div class="tourguide__guide_description">
                                    <p>
                                        <b>Languages: </b>{location.state.guide.language.join(', ')}
                                    </p>
                                </div>
                                <div class="tourguide__guide_description">
                                    <p>
                                        <b>Major: </b>{location.state.guide.major.join(', ')}
                                    </p>
                                </div>
                                <div class="tourguide__guide_description">
                                    <p>
                                        <b>Rate: </b>$60/hr
                                    </p>
                                </div>
                                <div class="tourguide__guide_bio">
                                    <p>
                                        { location.state.guide.note }
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
                        <div class="split" id="tourguide__tour_details">
                            <div id="tourguide__detail_text">Selected Tour Details</div>
                            <div>
                                <p>
                                    <div class="tourguide__detail_details_1">Date/Time:&nbsp;</div>
                                    <div class="tourguide__detail_details_2">November 20, 2020, 8:30 AM - 9:00 AM</div>
                                </p>
                                <p>
                                    <div class="tourguide__detail_details_1">Total Price:&nbsp;</div>
                                    <div class="tourguide__detail_details_2">$30</div>
                                </p>
                                <p>
                                    <div class="tourguide__detail_details_1">Meetup Place:&nbsp;</div>
                                    <div class="tourguide__detail_details_2">Main Quad</div>
                                </p>
                                <p>
                                    <div class="tourguide__detail_details_1">Tour Group Size:&nbsp;</div>
                                    <div class="tourguide__detail_details_2">5</div>
                                </p>
                                <p>
                                    <div class="tourguide__detail_details_1">Language:&nbsp;</div>
                                    <div class="tourguide__detail_details_2">Chinese (Mandarin)</div>
                                </p>
                            </div>
                            <div id="tourguide__recommended_course">
                                <p id="tourguide__recommended_course_text">Collin's Recommended Tour Course</p>
                                <div class="tourguide__recommended_course_box">
                                    <div class="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Meet at the Main Quad</div>
                                </div>
                                <div class="tourguide__recommended_course_box">
                                    <div class="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Visit the Memorial Church</div>
                                </div>
                                <div class="tourguide__recommended_course_box">
                                    <div class="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Tour the Cantor Arts Center</div>
                                </div>
                                <div class="tourguide__recommended_course_box">
                                    <div class="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Walk aroun the Engineering Quad</div>
                                </div>
                                <div class="tourguide__recommended_course_box">
                                    <div class="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;(Optional) Coffee Chat at Coupa Cafe</div>
                                </div>
                                <div class="tourguide__recommended_course_box">
                                    <div class="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Stanford Bookstore</div>
                                </div>
                                <div class="tourguide__recommended_course_box">
                                    <div class="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;Tresidder Memorial Union</div>
                                </div>
                            </div>
                            <a href="/#/tour">
                                <div class="tourguide__button">
                                    <p class="tourguide__btn_text">Back to list</p>
                                </div>
                            </a>
                            <a href="/#/reservation/confirmation">
                                <div class="tourguide__button">
                                    <p class="tourguide__btn_text">Select Tour Guide</p>
                                </div>
                            </a>
                        </div>
                        <div class="split" id="tourguide__tour_map">
                            <img src={ mapimg } width='550px' height='850px' class="tour_map"/>
                        </div>
                    </div>
                </body>
            )
        } else {
            return null;
        }
    }
}



export default Tourguide;