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

    tourCourse = (places) => places ? (
        places.map(place => <div class="tourguide__recommended_course_box">
                                <div class="tourguide__recommended_course_boxtext">&bull;&nbsp;&nbsp;{place}</div>
                            </div>)
    ) : ( <a>No information available.</a>)

    render() {
        const { location } = this.props;
        
        let group_size_label = "0"
        let language_label = "English"
        let meetup_place = "N/A"
        let price = 0
        let duration = 0
        let month = 0
        let day = 0
        let year = 0
        let time = 0
        
        let avgRating = 0.0
        if (location.state.guide.netRating && location.state.guide.completedTours) {
            avgRating = location.state.guide.netRating * 1.0 / location.state.guide.completedTours;
        }

        if (location.state) {
            if (this.props.location.state.guide.startLoc) {
                meetup_place = this.props.location.state.guide.startLoc;
            }
            if (this.props.location.state.state.duration) {
                duration = this.props.location.state.state.duration.value
                price = this.props.location.state.state.duration.value * 60
            }
            if (this.props.location.state.state.groupSize) {
                const { state: {state: { groupSize }} } = this.props.location;
                group_size_label = groupSize.label;
            }
            if (this.props.location.state.state.language) {
                const { state: {state: { language } } } = this.props.location;
                language_label = language.label;
            }
            if (this.props.location.state.state.startDate) {
                year = this.props.location.state.state.startDate.getFullYear()
                month = this.props.location.state.state.startDate.getMonth() + 1
                day = this.props.location.state.state.startDate.getDate()
                console.log(year, month, day)
            }
            if (this.props.location.state.state.startTime) {
                time = this.props.location.state.state.startTime.value;
            }
        }

        const monthMap = new Map()
        monthMap.set(1, "January")
            .set(2, "February")
            .set(3, "March")
            .set(4, "April")
            .set(5, "May")
            .set(6, "June")
            .set(7, "July")
            .set(8, "August")
            .set(9, "September")
            .set(10, "October")
            .set(11, "November")
            .set(12, "December")
        
        const timeMap = new Map();
        timeMap.set(5, "5:00")
            .set(6, "6:00")
            .set(7, "7:00")
            .set(8, "8:00")
            .set(9, "9:00")
            .set(10, "10:00")
            .set(11, "11:00")
            .set(12, "12:00")
            .set(13, "13:00")
            .set(14, "14:00")
            .set(15, "15:00")
            .set(16, "16:00")
            .set(17, "17:00")

        if (location.state) {
        console.log(this.props)
            return (
                <body>
                    <div id="tourguide_menubar">
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
                    <div id="tourguide_tour__mainpage">
                        <div class="split" id="tourguide_sidebar">
                        <div id="tourguide_guide_img_container">
                                <img id="tourguide_guide_img" 
                                     src= { location.state.guide.imageUrl } 
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
                                        {location.state.guide.note}
                                    </p>
                                </div>
                                <div>
                                    <p id="tourguide__guide_review" ><b>Review</b></p>
                                    <StarRatings
                                        rating={avgRating}
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
                                    <div class="tourguide__detail_details_2">{monthMap.get(month)} {day}th, {year}, {timeMap.get(time)} - {timeMap.get(time + duration)}</div>
                                </p>
                                <p>
                                    <div class="tourguide__detail_details_1">Total Price:&nbsp;</div>
                                    <div class="tourguide__detail_details_2">${price}</div>
                                </p>
                                <p>
                                    <div class="tourguide__detail_details_1">Meetup Place:&nbsp;</div>
                                    <div class="tourguide__detail_details_2">{meetup_place}</div>
                                </p>
                                <p>
                                    <div class="tourguide__detail_details_1">Tour Group Size:&nbsp;</div>
                                    <div class="tourguide__detail_details_2">{group_size_label}</div>
                                </p>
                                <p>
                                    <div class="tourguide__detail_details_1">Language:&nbsp;</div>
                                    <div class="tourguide__detail_details_2">{language_label}</div>
                                </p>
                            </div>
                            <div id="tourguide__recommended_course">
                                <p id="tourguide__recommended_course_text">{location.state.guide.firstName}'s Recommended Tour Course</p>
                                {this.tourCourse(location.state.guide.places)}
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