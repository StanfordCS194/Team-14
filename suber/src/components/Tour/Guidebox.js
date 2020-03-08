import React from 'react';
import './Tour.css';

import { Link } from 'react-router-dom'
import StarRatings from "react-star-ratings";
import Tour from './Tour';

class Guidebox extends React.Component {
    render() {
        const { classes, guide : { uid, firstName, lastName, imageUrl, handle, email, language, major, completedTours, netRating, note } } = this.props
        let avgRating = netRating * 1.0 / completedTours;
        let languages = language.join(', ');
        let majors = major.join(', ');
        return (
            <div class="guidebox">
                <div class="guide-image"></div>
                <div class="guide-text">
                    <Link class="guide-name" href= {"/#/tourguide/" + handle} to={{
                                pathname: "/tourguide",
                                state: this.props,
                     }}>
                        <b>{firstName}</b>
                    </Link>
                    <div class="guide-language">
                        <p>
                            <b>Languages: </b>{languages}
                        </p>
                    </div>
                    <div class="guide-major">
                        <p>
                            <b>Major: </b>{majors}
                        </p>
                    </div>
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
    )
    }
}

export default Guidebox