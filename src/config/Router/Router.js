import React from "react";
import { Router, Route } from "react-router-dom";
import { Home, Quiz, Result, QuestionStatus} from "./../../containers";
import history from "./../history/history";
function BasicExample() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/result" component={Result} />
      <Route path="/questionstatus" component={QuestionStatus} />
    </Router>
  );
}
export default BasicExample;
