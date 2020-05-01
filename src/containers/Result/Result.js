import React from "react";
import "./result.css";
import Grid from "@material-ui/core/Grid";
class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}

  render() {
    console.log(this.state, "home");
    return (
      <div className="mainResult">
        <div className="div2ndResult">
          <span className="result">Your Result</span>
          <span className="hero">Oprah Winfrey: The Hero</span>
          <img
            src="https://media.proprofs.com/images/QM/user_images/2704351/1587343702.jpg"
            className="images"
          />
          <span className="paragraph">
            You have a heart for the people and are not afraid to speak up for
            those in need. You have a genuine interest in family and friends,
            even strangers. You have a desire to do-good in your community.
            You're most likely to spend your fortune on a scholarship fund or
            building homes for the needy.
          </span>

          <span className="result">Share Your Result</span>
          <input
            type="button"
            value="Questin Status"
            className="statusbtn"
            onClick={() => this.props.history.push("questionstatus")}
          />
        </div>
      </div>
    );
  }
}
export default Quiz;
