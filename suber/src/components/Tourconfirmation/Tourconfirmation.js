import React from 'react';
import './Tourconfirmation.css';

import StarRatings from "react-star-ratings";

import suberimg from '../../imgs/SUBER.png';
import mapimg from '../../imgs/sample-map.png';

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

class Tourconfirmation extends React.Component {
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
                <div id="tourconfirmation_menubar">
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
                <div id="tourconfirmation_tour__mainpage">
                    <div class="split" id="tourconfirmation_sidebar">
                    <div id="tourconfirmation_guide_img_container">
                            <img id="tourconfirmation_guide_img" 
                                 src= { require('../../imgs/default-profile-picture1.jpg') } 
                                 width='350px' />
                        </div>
                        <div class="guide-text">
                            <div class="tourconfirmation__guide_name">
                                <b>Collin</b>
                            </div>
                            <div class="tourconfirmation__guide_description">
                                <p>
                                    <b>Languages: </b>English, Korean
                                </p>
                            </div>
                            <div class="tourconfirmation__guide_description">
                                <p>
                                    <b>Major: </b>Electrical Engineering
                                </p>
                            </div>
                            <div class="tourconfirmation__guide_description">
                                <p>
                                    <b>Rate: </b>$60/hr
                                </p>
                            </div>
                            <div class="tourconfirmation__guide_bio">
                                <p>
                                    Hello, I’m Collin, a junior studying EE. I’m 
                                    from Korea. I’m also involved in various
                                    on-campus organizations related to tech. I’m
                                    also part of an on-campus greek community.
                                </p>
                            </div>
                            <div>
                                <p id="tourconfirmation__guide_review" ><b>Review</b></p>
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
                    <div class="split" id="tourconfirmation__tour_details">
                        <div id="tourconfirmation__detail_text">Your Reservation</div>
                        <div id="tourconfirmation__">
                            <p>We will send you a confirmation email as soon as Collin accepts the reservation.</p>
                        </div>
                        <div id="tourconfirmation__detail">
                            <div class="tourconfirmation__detail_important">Reservation Number</div>
                            <div class="tourconfirmation__detail_content">BXDKAL</div>
                            <div class="tourconfirmation__detail_important">Reservation Status</div>
                            <div class="tourconfirmation__detail_content"
                                 id="tourguideconfirmation__waiting">Awaiting Confirmation</div>
                            <div class="tourconfirmation__detail_important">Tour Date/Time</div>
                            <div class="tourconfirmation__detail_content">November 20, 2020, 8:30 AM - 9:00 AM</div>
                            <div class="tourconfirmation__detail_important">Meetup Place</div>
                            <div class="tourconfirmation__detail_content">Main Quad</div>
                            <div class="tourconfirmation__detail_important">Total Price</div>
                            <div class="tourconfirmation__detail_content">$30</div>
                            <div class="tourconfirmation__detail_important">Instruction</div>
                            <div class="tourconfirmation__detail_content">Please arrive at the meetup place 5 minutes before 
                                the start of the tour. Payments for the tour service 
                                will be directly made to the guide in cash.</div>
                        </div>
                        <div class="tourconfirmation__button">
                            <a href="/#/" id="tourconfirmation__back_btn">Go Back Home</a>
                        </div>
                    </div>
                    <div class="split" id="tourconfirmation__tour_map">
                        <img src={ mapimg } width='550px' height='850px' />
                    </div>
                </div>
            </body>
        )
  }
}

export default Tourconfirmation;