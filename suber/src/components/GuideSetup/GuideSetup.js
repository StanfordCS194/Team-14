import React from 'react';
import './GuideSetup.css';
import {InputGroup, FormControl} from 'react-bootstrap'

import suberimg from '../../imgs/SUBER.png'

class GuideSetup extends React.Component {
    state = {
        email: null
    };
    
    
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
                        <div id="guidesetup__textbox">
                            <h1>Shit</h1>
                        </div>
                        
                        <div>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
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