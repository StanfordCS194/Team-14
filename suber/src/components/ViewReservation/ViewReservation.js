import React from 'react';
import './ViewReservation.css';
import Select from "react-select";
import suberimg from '../../imgs/SUBER.png'

class ViewReservation extends React.Component {
  render() {
        return (
            <body>
                <div id="viewReservation__menubar">
                    <a id="logo" href="/#/">
                        <img id="logo-img" src= { suberimg } />
                    </a>
                </div>	
                <div class="reservation_header">
                	Pending Reservation
                </div>
                <div class="reservation_header">
                	Confirmed Reservation
                </div>
            </body>	
        )
    }
}

export default ViewReservation;
