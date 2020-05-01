import React from "react";
import "./Quiz.css";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}

  render() {
    console.log(this.state, "home");
    return (
      <div className="mainQz">
        <div className="div2ndQz">
          <Grid item xs={12}>
            <span className="BillionaireQz">
              What Type of Billionaire are You?
            </span>
            <span className="questionQz">Total Questions : 7</span>
          </Grid>
          <div className="Q1">
            <Grid>
              <span style={{ fontWeight: "bold", marginRight: "2%" }}>1)</span>
              <span className="question1">
                You receive an invitation to a friend's destination wedding,
                What's your first thought?
              </span>
              <img
                src="https://media.proprofs.com/images/QM/user_images/2704351/10674058991.jpg"
                className="q1image"
              />
              <FormControl component="fieldset" style={{ display: "block" }}>
                <RadioGroup
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="Let's Go! I can find a way to make it work with my finances & schedule"
                    control={<Radio color="primary" />}
                    label="Let's Go! I can find a way to make it work with my finances & schedule"
                  />
                  <FormControlLabel
                    value="Congrats to them, but I won't be going. It's just too inconvenient."
                    control={<Radio color="primary" />}
                    label="Congrats to them, but I won't be going. It's just too inconvenient."
                  />
                  <FormControlLabel
                    value="Don't know if i can make it, but I'll have a great wedding gift waiting for them when they return home"
                    control={<Radio color="primary" />}
                    label="Don't know if i can make it, but I'll have a great wedding gift waiting for them when they return home"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </div>

          {/* 2question */}
          <div className="Q2">
            <Grid>
              <span style={{ fontWeight: "bold", marginRight: "2%" }}>2)</span>
              <span className="question2">
                You're offered 3 career choices, which do you Choose?
              </span>
              <img
                src="https://media.proprofs.com/images/QM/user_images/2704351/3857936686.jpg"
                className="q1image"
              />
              <FormControl component="fieldset" style={{ display: "block" }}>
                <RadioGroup
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="The one with the most job security"
                    control={<Radio color="primary" />}
                    label="The one with the most job security"
                  />
                  <FormControlLabel
                    value="The one that provides the most excitement"
                    control={<Radio color="primary" />}
                    label="The one that provides the most excitement"
                  />
                  <FormControlLabel
                    value="The one that allows me to give back & serve my community"
                    control={<Radio color="primary" />}
                    label="The one that allows me to give back & serve my community"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </div>

          {/* Question 3 */}
          <div className="Q3">
            <Grid>
              <span style={{ fontWeight: "bold", marginRight: "2%" }}>3)</span>
              <span className="question3">
                You're set to inherit a life-changing sum of money, what do you
                choose to do?
              </span>
              <img
                src="https://media.proprofs.com/images/QM/user_images/2704351/1034082268.jpg"
                className="q1image"
              />
              <FormControl component="fieldset" style={{ display: "block" }}>
                <RadioGroup
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="Start a New Business Venture for a new promising technology"
                    control={<Radio color="primary" />}
                    label="Start a New Business Venture for a new promising technology"
                  />
                  <FormControlLabel
                    value="Follow My Passion & See Where I can make the biggest impact on society"
                    control={<Radio color="primary" />}
                    label="Follow My Passion & See Where I can make the biggest impact on society"
                  />
                  <FormControlLabel
                    value="Find a mansion on the beach for sale"
                    control={<Radio color="primary" />}
                    label="Find a mansion on the beach for sale"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </div>
          {/* 4 question */}

          <div className="Q4">
            <Grid>
              <span style={{ fontWeight: "bold", marginRight: "2%" }}>4)</span>
              <span className="question4">
                Which of the following in-regards to money, do you find most
                relatable?
              </span>

              <FormControl component="fieldset" style={{ display: "block" }}>
                <RadioGroup
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="To be better off than my peers"
                    control={<Radio color="primary" />}
                    label="To be better off than my peers"
                  />
                  <FormControlLabel
                    value="To live a life of luxury"
                    control={<Radio color="primary" />}
                    label="To live a life of luxury"
                  />
                  <FormControlLabel
                    value="To leave an inheritance to my family/children"
                    control={<Radio color="primary" />}
                    label="To leave an inheritance to my family/children"
                  />
                  <FormControlLabel
                    value="To Master The Principles of Money then use it for good"
                    control={<Radio color="primary" />}
                    label="To Master The Principles of Money then use it for good"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </div>

          {/* question 5 */}

          <div className="Q5">
            <Grid>
              <span style={{ fontWeight: "bold", marginRight: "2%" }}>3)</span>
              <span className="question5">
                You're eligible for a phone upgrade, what do you do?
              </span>
              <img
                src="https://media.proprofs.com/images/QM/user_images/2704351/2674547460.jpg"
                className="q1image"
              />
              <FormControl component="fieldset" style={{ display: "block" }}>
                <RadioGroup
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="Take the upgrade with the newest and best phone available, even if it costs a little more"
                    control={<Radio color="primary" />}
                    label="Take the upgrade with the newest and best phone available, even if it costs a little more"
                  />
                  <FormControlLabel
                    value="I’ll save the money, nothing wrong with my current phone"
                    control={<Radio color="primary" />}
                    label="I’ll save the money, nothing wrong with my current phone"
                  />
                  <FormControlLabel
                    value="Maybe I'll use the upgrade to provide a new phone for my mother"
                    control={<Radio color="primary" />}
                    label="Maybe I'll use the upgrade to provide a new phone for my mother"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </div>

          {/* question 6 */}

          <div className="Q6">
            <Grid>
              <span style={{ fontWeight: "bold", marginRight: "2%" }}>6)</span>
              <span className="question6">
                Your child is graduating Highschool, which of the following do
                you do?
              </span>
              <img
                src="https://media.proprofs.com/images/QM/user_images/2704351/9340645907.jpg"
                className="q1image"
              />
              <FormControl component="fieldset" style={{ display: "block" }}>
                <RadioGroup
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="Get them an exciting gift, like a new car!"
                    control={<Radio color="primary" />}
                    label="Get them an exciting gift, like a new car!"
                  />

                  <FormControlLabel
                    value="Why does this call for a gift? I'm spending a fortune to send them to college"
                    control={<Radio color="primary" />}
                    label="Why does this call for a gift? I'm spending a fortune to send them to college"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </div>

          {/* question 7 */}

          <div className="Q7">
            <Grid>
              <span style={{ fontWeight: "bold", marginRight: "2%" }}>7)</span>
              <span className="question7">
                Which of these would you prefer for your money
              </span>
              <img
                src="https://media.proprofs.com/images/QM/user_images/2704351/1654263603.jpg"
                className="q1image"
              />
              <FormControl component="fieldset" style={{ display: "block" }}>
                <RadioGroup
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="Fund a business venture to advance society"
                    control={<Radio color="primary" />}
                    label="Fund a business venture to advance society"
                  />
                  <FormControlLabel
                    value="Provide for my kids and the next generation to come"
                    control={<Radio color="primary" />}
                    label="Provide for my kids and the next generation to come"
                  />
                  <FormControlLabel
                    value="Enjoy it! Money is meant for living"
                    control={<Radio color="primary" />}
                    label="Enjoy it! Money is meant for living"
                  />

                  <FormControlLabel
                    value="Leave it all to a good cause"
                    control={<Radio color="primary" />}
                    label="Leave it all to a good cause"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </div>
          <input
            type="button"
            value="View my results"
            className="resultbut"
            onClick={() => this.props.history.push("result")}
          />
        </div>
      </div>
    );
  }
}
export default Quiz;
