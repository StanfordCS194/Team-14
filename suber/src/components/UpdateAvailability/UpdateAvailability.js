import React from 'react';
import './UpdateAvailability.css';
import Select from "react-select";
import suberimg from '../../imgs/SUBER.png'
import ScheduleSelector from 'react-schedule-selector'

import { options_language, options_major } from '../Option/Option'

const options = {
    multiple: true,
    dataType: 'json'
}

class UpdateAvailability extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            schedule: [],
            placeholder_first_name: 'First Name',
            placeholder_last_name: 'Last Name'
        }
    }

    handleChange = newSchedule => {
      this.setState({ schedule: newSchedule })
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
                            <div>
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

                            <a href="/#/loggedin"> 
                                <button id="guidesetup__findbox-search" class="fb-text-white" color='#ffffff'> 
                                    Save Changes
                                </button>
                            </a>    
                        </div>
                    </div>
            </div>
            </body>
        )
    }
}

export default UpdateAvailability;