import React from 'react';
import './UpdateAvailability.css';
import Select from "react-select";
import suberimg from '../../imgs/SUBER.png'
import ScheduleSelector from 'react-schedule-selector'

// Redux
import { connect } from 'react-redux';
import { addUserDetails } from '../../redux/actions/userActions';
import PropTypes from 'prop-types';

class UpdateAvailability extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            schedule: []
        }
    }

    handleChange = newSchedule => {
      this.setState({ schedule: newSchedule })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            schedule: this.state.schedule
        };
        this.props.addUserDetails(userData, this.props.history);
    }

    render() {
        return (
            <body>
                <div id="guidesetup__menubar">
                    <a id="logo" href="/#/">
                        <img id="logo-img" src= { suberimg } />
                    </a>
                </div>
                 <div>
                <div id="guidesetup__mainbox">
                        <div id="guidesetup__container3">
                            <div id = "guidesetup_header">
                                <h1>Update Your Availability</h1>
                            </div>
                            <ScheduleSelector
                                selection={this.state.schedule}
                                numDays={7}
                                minTime={8}
                                maxTime={17}
                                onChange={this.handleChange}
                            />
                            <div id="guidesetup__textred"> 
                                <div class="guidesetup__fb-text-red">
                                    Drag down the time slots that you’re able to offer tours
                                </div>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <button id="guidesetup__findbox-search" class="fb-text-white" color='#ffffff'> 
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
            </div>
            </body>
        )
    }
}

UpdateAvailability.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    addUserDetails: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})

export default connect(mapStateToProps, { addUserDetails })(UpdateAvailability);