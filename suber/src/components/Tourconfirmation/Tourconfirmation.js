import React from 'react';
import './Tourconfirmation.css';
import axios from 'axios';

import StarRatings from "react-star-ratings";

import suberimg from '../../imgs/SUBER.png';
import mapimg from '../../imgs/sample-map.png';
import {timeMap, monthMap} from '../Option/Option'

class Tourconfirmation extends React.Component {
    state = {
        touristContact: this.props.location.state.touristContact,
        guide: null,
        tour: null
    };

    componentDidMount() {
        axios
            .get('/tour')
            .then((res) => {
                let tours = res.data
                tours = tours.filter(tour => tour.touristContact === this.state.touristContact)
                this.setState(
                    { tour: tours[0] }
                )
            })
            .then(
                axios
                    .get('/guides')
                    .then((res) => {
                    console.log(res.data);
                    let guides = res.data
                    guides = guides.filter(guide => guide.userId === this.state.tour.userId)
                    this.setState(
                        {guide: guides[0]}
                    )
                    })
            )
            
            .catch(err => console.log(err.response));
        
    }

    render() {
        if (this.props.location.state === undefined) {
            this.props.history.push('/tour')
            return null
        }

        console.log(this.state);
        if (this.state.guide == null || this.state.tour == null) {
            return(<body>
                <div>
                    <h1>Loading...</h1>
                </div>
            </body>);
        }

        let { imageUrl, firstName, language, major, 
            note, netRating, completedTours, startLoc} = this.state.guide
        let avgRating = 0.0
        if (netRating && completedTours) {
            avgRating = netRating * 1.0 / completedTours;
        }

        let { startDate, startTime, duration } = this.state.tour
        let price = 0
        if (duration !== null) {
            price = duration * 60
        } else {
            duration = 0
        }

        let month = 0
        let day = 0
        let year = 0
        let time = 0

        var start_date = new Date(startDate)
        if (start_date) {
            year = start_date.getFullYear()
            month = start_date.getMonth() + 1
            day = start_date.getDate()
        }
        if (startTime) {
            time = startTime
        }

        
        return (
            <body>
                <div id="tourconfirmation_menubar">
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
                <div id="tourconfirmation_tour__mainpage">
                    <div class="split" id="tourconfirmation_sidebar">
                    <div id="tourconfirmation_guide_img_container">
                            <img id="tourconfirmation_guide_img" 
                                 src= { imageUrl } 
                                 width='350px'
                                 height='350px' />
                        </div>
                        <div class="guide-text">
                            <div class="tourconfirmation__guide_name">
                                <b>{firstName}</b>
                            </div>
                            <div class="tourconfirmation__guide_description">
                                <p>
                                    <b>Languages: </b>{language.join(', ')}
                                </p>
                            </div>
                            <div class="tourconfirmation__guide_description">
                                <p>
                                    <b>Major: </b>{major.join(', ')}
                                </p>
                            </div>
                            <div class="tourconfirmation__guide_description">
                                <p>
                                    <b>Rate: </b>$60/hr
                                </p>
                            </div>
                            <div class="tourconfirmation__guide_bio">
                                <p>{note}</p>
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
                            <p>We will send you a confirmation email as soon as {firstName} accepts the reservation.</p>
                        </div>
                        <div id="tourconfirmation__detail">
                            <div class="tourconfirmation__detail_important">Email</div>
                            <div class="tourconfirmation__detail_content">{this.state.tour.touristContact}</div>
                            <div class="tourconfirmation__detail_important">Reservation Status</div>
                            <div class="tourconfirmation__detail_content"
                                 id="tourguideconfirmation__waiting">{this.state.tour.status.toUpperCase()}</div>
                            <div class="tourconfirmation__detail_important">Tour Date/Time</div>
                            <div class="tourconfirmation__detail_content">{monthMap.get(month)} {day}th, {year}, {timeMap.get(time)} - {timeMap.get(time + duration)}</div>
                            <div class="tourconfirmation__detail_important">Meetup Place</div>
                            <div class="tourconfirmation__detail_content">{startLoc}</div>
                            <div class="tourconfirmation__detail_important">Total Price</div>
                            <div class="tourconfirmation__detail_content">${price}</div>
                            <div class="tourconfirmation__detail_important">Instruction</div>
                            <div class="tourconfirmation__detail_content">Please arrive at the meetup place 5 minutes before 
                                the start of the tour. Payments for the tour service 
                                will be directly made to the guide in cash.</div>
                        </div>
                        <a href="/#/">
                            <div class="tourconfirmation__button">
                                <p id="tourconfirmation__back_btn">Go Back Home</p>
                            </div>
                        </a>
                    </div>
                    <div class="split" id="tourconfirmation__tour_map">
                        <img src={ mapimg } width='550px' height='850px' class="tour_map"/>
                    </div>
                </div>
            </body>
        )
  }
}

export default Tourconfirmation;