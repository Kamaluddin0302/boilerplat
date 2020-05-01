import React from "react";
import "./questionstatus.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}

  render() {
    console.log(this.state, "home");
    return (
      <div className="mainQues">
        <Grid lg={12}>
          <div className="div2ndQues">
            <span className="status">Questions Staus</span>
            <table className="qumain" cellpadding="10" cellspacing="5">
              <Paper style={{ backgroundColor: "rgb(253, 253, 253)" }}>
                {/* // head */}
                <tr className="tr1">
                  <th className="th1">
                    <span style={{ color: "black" }}>Q.1 )</span>
                    You receive an invitation to a friend's destination wedding,
                    What's your first thought&...
                  </th>
                  <th className="th2">Responce Percentage</th>
                  <th className="th3">Responce Count</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>A. )</span>
                    Let's Go! I can find a way to make it work with my finances
                    & schedule
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>B. )</span>
                    Congrats to them, but I won't be going. It's just too
                    inconvenient.
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>C. )</span>
                    Don't know if i can make it, but I'll have a great wedding
                    gift waiting for them when they return home
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th></th>
                  <th className="totalparcentage">60.26%</th>
                  <th className="totalrespoce">47 Responce</th>
                </tr>
              </Paper>
            </table>

            {/* 2 */}
            <table className="qumain" cellpadding="10" cellspacing="5">
              <Paper style={{ backgroundColor: "rgb(253, 253, 253)" }}>
                {/* // head */}
                <tr className="tr1">
                  <th className="th1">
                    <span style={{ color: "black" }}>Q.1 )</span>
                    You receive an invitation to a friend's destination wedding,
                    What's your first thought&...
                  </th>
                  <th className="th2">Responce Percentage</th>
                  <th className="th3">Responce Count</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>A. )</span>
                    Let's Go! I can find a way to make it work with my finances
                    & schedule
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>B. )</span>
                    Congrats to them, but I won't be going. It's just too
                    inconvenient.
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>C. )</span>
                    Don't know if i can make it, but I'll have a great wedding
                    gift waiting for them when they return home
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th></th>
                  <th className="totalparcentage">60.26%</th>
                  <th className="totalrespoce">47 Responce</th>
                </tr>
              </Paper>
            </table>

            {/* 3 */}
            <table className="qumain" cellpadding="10" cellspacing="5">
              <Paper style={{ backgroundColor: "rgb(253, 253, 253)" }}>
                {/* // head */}
                <tr className="tr1">
                  <th className="th1">
                    <span style={{ color: "black" }}>Q.1 )</span>
                    You receive an invitation to a friend's destination wedding,
                    What's your first thought&...
                  </th>
                  <th className="th2">Responce Percentage</th>
                  <th className="th3">Responce Count</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>A. )</span>
                    Let's Go! I can find a way to make it work with my finances
                    & schedule
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>B. )</span>
                    Congrats to them, but I won't be going. It's just too
                    inconvenient.
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>C. )</span>
                    Don't know if i can make it, but I'll have a great wedding
                    gift waiting for them when they return home
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th></th>
                  <th className="totalparcentage">60.26%</th>
                  <th className="totalrespoce">47 Responce</th>
                </tr>
              </Paper>
            </table>

            {/* 4 */}

            <table className="qumain" cellpadding="10" cellspacing="5">
              <Paper style={{ backgroundColor: "rgb(253, 253, 253)" }}>
                {/* // head */}
                <tr className="tr1">
                  <th className="th1">
                    <span style={{ color: "black" }}>Q.1 )</span>
                    You receive an invitation to a friend's destination wedding,
                    What's your first thought&...
                  </th>
                  <th className="th2">Responce Percentage</th>
                  <th className="th3">Responce Count</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>A. )</span>
                    Let's Go! I can find a way to make it work with my finances
                    & schedule
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>B. )</span>
                    Congrats to them, but I won't be going. It's just too
                    inconvenient.
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>C. )</span>
                    Don't know if i can make it, but I'll have a great wedding
                    gift waiting for them when they return home
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th></th>
                  <th className="totalparcentage">60.26%</th>
                  <th className="totalrespoce">47 Responce</th>
                </tr>
              </Paper>
            </table>

            {/* 5 */}

            <table className="qumain" cellpadding="10" cellspacing="5">
              <Paper style={{ backgroundColor: "rgb(253, 253, 253)" }}>
                {/* // head */}
                <tr className="tr1">
                  <th className="th1">
                    <span style={{ color: "black" }}>Q.1 )</span>
                    You receive an invitation to a friend's destination wedding,
                    What's your first thought&...
                  </th>
                  <th className="th2">Responce Percentage</th>
                  <th className="th3">Responce Count</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>A. )</span>
                    Let's Go! I can find a way to make it work with my finances
                    & schedule
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>B. )</span>
                    Congrats to them, but I won't be going. It's just too
                    inconvenient.
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>C. )</span>
                    Don't know if i can make it, but I'll have a great wedding
                    gift waiting for them when they return home
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th></th>
                  <th className="totalparcentage">60.26%</th>
                  <th className="totalrespoce">47 Responce</th>
                </tr>
              </Paper>
            </table>

            {/* 6 */}
            <table className="qumain" cellpadding="10" cellspacing="5">
              <Paper style={{ backgroundColor: "rgb(253, 253, 253)" }}>
                {/* // head */}
                <tr className="tr1">
                  <th className="th1">
                    <span style={{ color: "black" }}>Q.1 )</span>
                    You receive an invitation to a friend's destination wedding,
                    What's your first thought&...
                  </th>
                  <th className="th2">Responce Percentage</th>
                  <th className="th3">Responce Count</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>A. )</span>
                    Let's Go! I can find a way to make it work with my finances
                    & schedule
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>B. )</span>
                    Congrats to them, but I won't be going. It's just too
                    inconvenient.
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>C. )</span>
                    Don't know if i can make it, but I'll have a great wedding
                    gift waiting for them when they return home
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th></th>
                  <th className="totalparcentage">60.26%</th>
                  <th className="totalrespoce">47 Responce</th>
                </tr>
              </Paper>
            </table>

            {/* 7 */}

            <table className="qumain" cellpadding="10" cellspacing="5">
              <Paper style={{ backgroundColor: "rgb(253, 253, 253)" }}>
                {/* // head */}
                <tr className="tr1">
                  <th className="th1">
                    <span style={{ color: "black" }}>Q.1 )</span>
                    You receive an invitation to a friend's destination wedding,
                    What's your first thought&...
                  </th>
                  <th className="th2">Responce Percentage</th>
                  <th className="th3">Responce Count</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>A. )</span>
                    Let's Go! I can find a way to make it work with my finances
                    & schedule
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>B. )</span>
                    Congrats to them, but I won't be going. It's just too
                    inconvenient.
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th className="answer">
                    <span style={{ color: "black" }}>C. )</span>
                    Don't know if i can make it, but I'll have a great wedding
                    gift waiting for them when they return home
                  </th>
                  <th className="parcentage">60.26%</th>
                  <th className="respoce">47 Responce</th>
                </tr>
                <tr>
                  <th></th>
                  <th className="totalparcentage">60.26%</th>
                  <th className="totalrespoce">47 Responce</th>
                </tr>
              </Paper>
            </table>
          </div>
        </Grid>
      </div>
    );
  }
}
export default Quiz;
