import React from 'react';
import './Search.css';
import {InputGroup, FormControl} from 'react-bootstrap'

import suberimg from '../../imgs/SUBER.png'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            value: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    
    render() {
        return (
            <body>
                <div id="search__menubar">
                    <a id="search__logo" href="/#/">
                        <img id="search__logo-img" src= { suberimg } />
                    </a>
                </div>
                
                <div id="search__mainpage">
                    <div id="search__container">
                        <div id="search__textbox">
                            <h1>Search Reservation</h1>
                        </div>
                        <div>
                            <h1 id="search__reservation_code_text">Reservation Code</h1>
                            <form onSubmit={this.handleSubmit}>
                                <input id="search__findbox-input" type="text" value={this.state.value} onChange={this.handleChange} />
                            </form>
                            <a href="/#/search/confirmation">
                                <button id="search__findbox-search" type="submit" value="Submit">
                                    View Reservation Detail
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        )
  }
}

export default Search;