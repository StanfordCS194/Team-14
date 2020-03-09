import React from 'react';
import './GuideSetup.css';
import Select from "react-select";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import suberimg from '../../imgs/SUBER.png'
import bar1 from '../../imgs/bar1.jpg'
import bar2 from '../../imgs/bar2.jpg'
import bar3 from '../../imgs/bar3.jpg'

import ScheduleSelector from 'react-schedule-selector'
import ImageUploader from 'react-images-upload';

// Redux
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/userActions';

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
            firstName: '',
            lastName: '',
            major: [],
            language: [],
            note: '',
            phone: '',
            startLoc: '',
            errors: {}
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newUserEmail = localStorage.getItem('newUserEmail');
        localStorage.removeItem('newUserEmail');
        let newUserPW = localStorage.getItem('newUserPW');
        localStorage.removeItem('newUserPW');
        const newUserData = {
            email: newUserEmail,
            password: newUserPW,
            confirmPassword: newUserPW,
            schedule: this.state.schedule,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            major: this.state.major.map(({ label }) => label),
            language: this.state.language.map(({ label }) => label),
            note: this.state.note,
            phone: this.state.phone,
            startLoc: this.state.startLoc
        };
        this.props.signupUser(newUserData, this.props.history);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleMultiChange = (attr, selects) => {
        this.setState({
           [attr]: selects
        });
    }

    handleChangeMajor = (selects) => {
       this.handleMultiChange('major', selects);
    }

    handleChangeLanguage = (selects) => {
       this.handleMultiChange('language', selects);
    }

    handleChangeSchedule = newSchedule => {
      this.setState({ schedule: newSchedule });
    }
    
  
    page1 = () => {
        let chooseButton = (
            <button className="guidesetup__choose_button">
                <p className="guidesetup__choose_button_text">Choose</p>
            </button>
        );

        let uploadButton = (
            <button className="guidesetup__choose_button">
                <p className="guidesetup__choose_button_text">Upload</p>
            </button>
        );

        return(
            <div>
                <div id="guidesetup__mainbox">
                        <div id="guidesetup__container">
                            <div id="guidesetup__bar">
                                <img id="guidesetup__bar-img" src= { bar1 } />
                            </div>
                            <div>
                                <h1>Tell us more about yourself</h1>
                            </div>

                            <div id="guidesetup__textbox">
                                <div id="guidesetup__imageupload_container">
                                    <h2>1. Upload your profile picture</h2>
                                    <ImageUploader
                                        withIcon={true}
                                        buttonText='Choose images'
                                        onChange={this.onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={5242880}
                                    />
                                </div>
                                <div>
                                    <h2>2. What's your name?</h2>
                                    <input class="guidesetup__name_input_box" name="firstName" type="text" placeholder="First Name"
                                           value={this.state.firstName} onChange={this.handleChange} />
                                    <input class="guidesetup__name_input_box" name="lastName" type="text" placeholder="Last Name"
                                           value={this.state.lastName} onChange={this.handleChange} />
                                </div>
                                <div>
                                    <h2>3. What is your major(s)?</h2>
                                    <div class="guidesetup__select">
                                        <Select
                                            isMulti={true}
                                            value={this.state.major}
                                            onChange={this.handleChangeMajor}
                                            options={options_major}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2>4. What language(s) do you speak?</h2>
                                    <div class="guidesetup__select">
                                        <Select
                                            name="language"
                                            isMulti={true}
                                            value={this.state.language}
                                            onChange={this.handleChangeLanguage}
                                            options={options_language}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2>5. Write a short bio to introduce yourself</h2>
                                    <textarea class="guidesetup__bio_input_box" name='note' placeholder="e.g. Hi! I'm Collin, a junior studying..."
                                              value={this.state.name} onChange={this.handleChange}/>
                                </div>
                            </div>

                            <button id="guidesetup__findbox-search" onClick = {this.nextPage1} class="fb-text-white" color='#ffffff'> Next</button>
                            
                        </div>
                    </div>
            </div>

        );
    }

    page2 = () => {
        return(
            <div>
                <div id="guidesetup__mainbox">
                        <div id="guidesetup__container">
                            <div id="guidesetup__bar">
                                <img id="guidesetup__bar-img" src= { bar2 } />
                            </div>
                            <div>
                                <h1>Tell us more about yourself</h1>
                            </div>
                            <div id="guidesetup__textbox">
                                <div>
                                    <h2>6. Contact Information</h2>
                                    <input class="guidesetup__contact_input_box" name="phone" type="text" placeholder="Mobile Number"
                                           value={this.state.phone} onChange={this.handleChange} />
                                </div>
                                <h2>7. Where would you prefer to meet with visitors?</h2>
                                <input class="guidesetup__contact_input_box" name="startLoc" type="text" placeholder="e.g. Tresidder Union"
                                           value={this.state.loc} onChange={this.handleChange} />
                                <h2>8. Please describe an example tour path you can lead</h2>
                                <input class="guidesetup__path_input_box" type="text" placeholder="Place 1"
                                           value={this.state.value} onChange={this.handleChange} />
                                <input class="guidesetup__path_input_box" type="text" placeholder="Place 2"
                                       value={this.state.value} onChange={this.handleChange} />
                                <input class="guidesetup__path_input_box" type="text" placeholder="Place 3"
                                       value={this.state.value} onChange={this.handleChange} />
                                <input class="guidesetup__path_input_box" type="text" placeholder="Place 4"
                                       value={this.state.value} onChange={this.handleChange} />
                                <input class="guidesetup__path_input_box" type="text" placeholder="Place 5"
                                       value={this.state.value} onChange={this.handleChange} />
                            </div>

                            <button id="guidesetup__findbox-search" onClick = {this.nextPage2} class="fb-text-white" color='#ffffff'> Next</button>
                            
                        </div>
                    </div>
            </div>
        );
    }

    page3 = () => {
        return(
            <div>
                <div id="guidesetup__mainbox">
                        <div id="guidesetup__container3">
                            <div id="guidesetup__bar">
                                <img id="guidesetup__bar-img" src= { bar3} />
                            </div>
                            <div>
                                <h1>Tell us more about yourself</h1>
                            </div>
                            <div id="guidesetup__textbox3" >
                                <h2>9. What is your availability?</h2>
                                Remember, you can always change this later.
                            </div>
                            <ScheduleSelector
                                selection={this.state.schedule}
                                numDays={7}
                                minTime={8}
                                maxTime={17}
                                onChange={this.handleChangeSchedule}
                            />
                            <div id="guidesetup__textred"> 
                                <div class="guidesetup__fb-text-red">
                                    Drag down the time slots that you’re able to offer tours
                                </div>
                            </div>
                            
                            
                            <div class="guidesetup__fb-text-grey"> 
                                You're almost there!
                            </div>
                            <Link to={{ pathname: "/welcome" }} >
                                <form onSubmit={this.handleSubmit}>
                                    <button id="guidesetup__findbox-search" class="fb-text-white" color='#ffffff'> 
                                        Next
                                    </button>
                                </form>
                            </Link>
                        </div>
                    </div>
            </div>
        );
    }

    nextPage1 = () => {
        this.setState({
            page: 2
        })
    }

    nextPage2 = () => {
        this.setState({
            page: 3
        })
    }

    PageChange = (param) => {
        switch (param) {
            case 1:
                return this.page1();
            case 2:
                return this.page2();
            case 3:
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

GuideSetup.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})

export default connect(mapStateToProps, { signupUser })(GuideSetup);