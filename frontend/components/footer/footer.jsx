import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {

    render(){
        return(
            <div className="footer">
                <Link className="logo" to="/"><FontAwesomeIcon icon="mountain" /><h1>AllJourneys</h1></Link>
                <div className="footer-right-container">
                    
                </div>
            </div>
        )
    }
}
