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


    img1 = () => {
        return(
            <div id="guidesetup__bar">
                <img id="guidesetup__bar-img" src= { bar1 } />
            </div>
        );
    }

    img2 = () => {
        return(
            <div id="guidesetup__bar">
                <img id="guidesetup__bar-img" src= { bar2 } />
            </div>
        );
    }

    img3 = () => {
        return(
            <div id="guidesetup__bar">
                <img id="guidesetup__bar-img" src= { bar3 } />
            </div>
        );
    }

    PageBar = (param) => {
        switch (param) {
            case 1:
                return this.img1();
            case 2:
                return this.img2();
            case 3:
                return this.img3();
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
                
                <div id="guidesetup__mainbox">
                    <div id="guidesetup__container">
                        <div>
                            {this.PageBar(this.state.page)}
                            <h1>Tell us more about yourself</h1>
                        </div>

                        <div id="guidesetup__textbox">
                            <h2>1. Upload your profile picture</h2>
                            
                        </div>
                        

                        <button id="guidesetup__findbox-search">
                            <a href="/#/register" class="guidesetup__fb-text-white" color='#ffffff'>Send a confirmation code</a>
                        </button>
                    </div>
                </div>
            </body>
        )
  }
}

export default GuideSetup;