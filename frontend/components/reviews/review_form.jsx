import React from "react";
import ReactStars from "react-rating-stars-component";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
        e.preventDefault();
        this.setState(this.props.initialState)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render(){
        debugger
        return (
            <div id="modal-container">
                <form>
                <div id="rating-text-container">

                </div>
                <div></div>
                </form>
            </div>
        )

    }
}

export default ReviewForm;
