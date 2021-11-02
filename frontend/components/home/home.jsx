import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    render() {
        const slogan = this.props.currentUser ? (
            <div> Ready to do this?, {this.props.currentUser.firstname}</div>
        ):(
            <div>Find your next trail</div>
        )
        return <div className="homepage">
            <div>
                {slogan}
                <input type="text" placeholder="Search by city,park, or trail name"/>
            </div>
            
             </div>;
  }
}

export default Home;
