import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {

    render(){
        return(
            <div className="footer">
                <Link className="logo" to="/"><FontAwesomeIcon icon="mountain" /><h1>AllJourneys</h1></Link>
                <div className="footer-right-container">
                    <a href="https://www.linkedin.com/in/zeki-kural-45b172133/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
                    <a href="https://zekikural.dev/" target="_blank"><FontAwesomeIcon icon={["fas", "smile-beam"]}/></a>
                    <a href="https://github.com/jhkl12/AllJourneys" target="_blank"><FontAwesomeIcon icon={["fab", "github"]}/></a>
                    <a href="https://angel.co/u/zeki-can-kural" target="_blank"><FontAwesomeIcon icon={["fab", "angellist"]}/></a>
                </div>
            </div>
        )
    }
}
export default Footer;
