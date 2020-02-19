import React from 'react';
import './GuideSetup.css';
import {InputGroup, FormControl} from 'react-bootstrap'

import suberimg from '../../imgs/SUBER.png'
import bar1 from '../../imgs/bar1.jpg'
import bar2 from '../../imgs/bar2.jpg'
import bar3 from '../../imgs/bar3.jpg'


class GuideSetup extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            page: 1
        }
    }
    


    page1 = () => {
        return(
            <div>
                <div id="guidesetup__mainbox">
                        <div id="guidesetup__container">
                            <div>
                                <h1>Tell us more about yourself</h1>
                            </div>
                            <div id="guidesetup__bar">
                                <img id="guidesetup__bar-img" src= { bar1 } />
                            </div>

                            <div id="guidesetup__textbox">
                                <h2>1. Upload your profile picture</h2>
                                <h2>2. What's your name?</h2>
                                <h2>3. What is your major(s)?</h2>
                                <h2>4. What language(s) do you speak?</h2>
                                <h2>5. Write a short bio to introduce yourself</h2>
                                
                            </div>

                            <button id="guidesetup__findbox-search" onClick = {this.nextPage1} class="fb-text-white" color='#ffffff'> Next  </button>
                            
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
                            <div>
                                <h1>Tell us more about yourself</h1>
                            </div>
                            <div id="guidesetup__bar">
                                <img id="guidesetup__bar-img" src= { bar2 } />
                            </div>

                            <div id="guidesetup__textbox">
                                <h2>6. Contact Information</h2>
                                <h2>7. Where would you prefer to meet with visitors?</h2>
                                <h2>8. Please describe an example tour path you can lead</h2>
                                
                            </div>

                            <button id="guidesetup__findbox-search" onClick = {this.nextPage2} class="fb-text-white" color='#ffffff'> Next  </button>
                            
                        </div>
                    </div>
            </div>
        );
    }

    page3 = () => {
        return(
            <div>
                <div id="guidesetup__mainbox">
                        <div id="guidesetup__container">
                            <div>
                                <h1>Tell us more about yourself</h1>
                            </div>
                            <div id="guidesetup__bar">
                                <img id="guidesetup__bar-img" src= { bar3} />
                            </div>

                            <div id="guidesetup__textbox">
                                <h2>9. What is your availability?</h2>
                                Remember, you can always change this later.
                                
                            </div>

                            <button id="guidesetup__findbox-search" > 
                                <a href="/#/welcome" class="fb-text-white" color='#ffffff'>Next</a>
                            </button>
                            
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
                    <div id="guidesetup__logo">
                        <img id="guidesetup__logo-img" src= { suberimg } />
                    </div>
                </div>
                
                {this.PageChange(this.state.page)}
            </body>
        )
  }
}

export default GuideSetup;