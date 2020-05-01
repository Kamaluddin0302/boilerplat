import React from "react";
import "./home.css";
import Grid from "@material-ui/core/Grid";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onHandelchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  start = () => {
    if (!this.state.fristName) {
      this.setState({
        nameerrormessage: "Please enter Frist and last Name",
        emailerrormessage: "",
      });
    } else if (!this.state.email) {
      this.setState({
        emailerrormessage: "Please enter your email-Id",
        nameerrormessage: "",
      });
    } else {
      this.props.history.push("quiz");
    }
  };
  render() {
    console.log(this.state, "home");
    return (
      <div className="main">
        <div className="div2nd">
          <Grid item xs={12}>
            <span className="Billionaire">
              What Type of Billionaire are You?
            </span>
            <span className="question"> 7 Questions</span>
          </Grid>
          <Grid item lg={12} sm={8} xs={8}>
            <img
              src="https://media.proprofs.com/images/QM/user_images/2704351/1587411535.png"
              className="image"
            />
          </Grid>
          <Grid lg={10} sm={12} xs={12}>
            <span className="description">
              What billionaire are you most similar to? How would you spend your
              fortune? Go ahead take this quiz and find out!
            </span>
          </Grid>
          <form>
            <div>
              <span className="errorMessage">
                {this.state.nameerrormessage}
              </span>
              <label className="name">Name</label>
              <Grid container direction="row" lg={4}>
                <Grid lg={6} sm={4} xs={8}>
                  <input
                    type="text"
                    placeholder="Frist Name"
                    name="fristName"
                    className="nameInput"
                    onChange={(e) => this.onHandelchange(e)}
                  />
                </Grid>
                <Grid lg={6} sm={4} xs={8}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="lastnameInput"
                    onChange={(e) => this.onHandelchange(e)}
                  />
                </Grid>
              </Grid>
            </div>
            <div>
              <span className="errorMessage">
                {this.state.emailerrormessage}
              </span>

              <label className="email">Email</label>

              <Grid lg={4} sm={8} xs={8}>
                <input
                  type="email"
                  placeholder="someone@example.com"
                  className="emailInput"
                  name="email"
                  onChange={(e) => this.onHandelchange(e)}
                />
              </Grid>
              <br />
              <input
                type="button"
                value="Start"
                className="start"
                onClick={() => this.start()}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Home;
