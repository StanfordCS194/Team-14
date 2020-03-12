import React from 'react';
import './Tourguideconfirmation.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import suberimg from '../../imgs/SUBER.png'

import { connect } from 'react-redux';
import { postTour } from '../../redux/actions/dataActions';

class Tourguideconfirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            note: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const newTourData = {
            userId: this.props.location.state.guide.userId,
            touristName: this.state.name,
            touristContact: this.state.email,
            partySize: this.props.location.state.state.groupSize.value,
            startDate: this.props.location.state.state.startDate,
            startTime: this.props.location.state.state.startTime.value,
            duration: this.props.location.state.state.duration.value,
            startLoc: this.props.location.state.guide.startLoc,
            language: this.props.location.state.state.language.label,
            note: this.state.note
        };
        console.log(newTourData);
        this.props.postTour(newTourData, this.props.history);
    }
    
    render() {
        return (
            <body>
                <div id="cancel__menubar">
                    <a id="cancel__logo" href="/#/">
                        <img id="cancel__logo-img" src= { suberimg } />
                    </a>
                </div>
                
                <div id="cancel__mainpage">
                    <div id="cancelconfirmation__container">
                        <div id="tourguideconfirmation__textbox">
                            <h1>Enter your information to confirm</h1>
                        </div>
                        <div>
                            <h2>First name</h2>
                                <label id="tourist_name">
                                    <input id="register__findbox-input" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                                </label>
                        </div>
                        <div>
                            <h2>Email address</h2>
                                <label id="tourist_email">
                                    <input id="register__findbox-input" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                                </label>
                        </div>
                        <div>
                                <h3>Would you like to say anything to your tour guide?</h3>
                                    <textarea name='note' placeholder="e.g. Hello! We're visiting from..."
                                              value={this.state.note} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <button id="cancel__findbox-search" type="submit" value="Submit">
                                        Yes, confirm reservation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

Tourguideconfirmation.propTypes = {
    classes: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    postTour: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    UI: state.UI
})
const mapActionsToProps = { postTour };

export default connect(mapStateToProps, mapActionsToProps)(Tourguideconfirmation);