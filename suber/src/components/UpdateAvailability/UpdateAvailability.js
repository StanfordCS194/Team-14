import React from 'react';
import './UpdateAvailability.css';
import Select from "react-select";

import suberimg from '../../imgs/SUBER.png'

import ScheduleSelector from 'react-schedule-selector'
import ImageUploader from 'react-images-upload';

import { options_language, options_major } from '../Option/Option'

const options = {
    multiple: true,
    dataType: 'json'
}

class GuideSetup extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            schedule: [],
            placeholder_first_name: 'First Name',
            placeholder_last_name: 'Last Name'
        }
    }

    handleChange = newSchedule => {
      this.setState({ schedule: newSchedule })
    }
    

    page1 = () => {
        return(
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

                            <a href="/#/welcome"> 
                                <button id="guidesetup__findbox-search" class="fb-text-white" color='#ffffff'> 
                                    Next
                                </button>
                            </a>
                            
                            
                        </div>
                    </div>
            </div>
        );
    }


    PageChange = (param) => {
        switch (param) {
            case 1:
                return this.page1();
            case 2:
                return this.page2();
            case 3:
                console.log("3")
                return this.page3();
        }
    }
    
    render() {
        return (
            <body>
                <div id="guidesetup__menubar">
                    <a id="logo" href="/#/">
                        <img id="logo-img" src= { suberimg } />
                    </a>
                </div>
                {this.PageChange(this.state.page)}
            </body>
        )
    }
}

export default GuideSetup;