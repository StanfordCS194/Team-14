import React from 'react';
import './Tour.css';

import { Link } from 'react-router-dom'
import StarRatings from "react-star-ratings";

class Guidebox extends React.Component {
    render() {
        console.log(this.props)
        const { classes, guide : { uid, firstName, lastName, imageUrl, handle, email, language, major, completedTours, netRating } } = this.props
        let avgRating = 0.0;
        let languages = [];
        let majors = [];
        if (netRating && completedTours) avgRating = netRating * 1.0 / completedTours;
        if (language) languages = language.join(', ');
        if (major) majors = major.join(', ');
        return (
            <div class="guidebox">
                <div class="guide-image">
                <img class="guide-image"
                    src={ imageUrl }
                    width='150px'
                    height='150px' />
                </div>
                <div class="guide-text">
                    <Link class="guide-name"  to={{
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
                    <div class="guide-rating">
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
    )
    }
}

export default Guidebox