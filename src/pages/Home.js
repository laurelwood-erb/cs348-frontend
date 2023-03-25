import { React } from "react";
import { Link } from "react-router-dom";
import { questions } from "../helpers/questions";

const Home = () => {
  return (
    <div className="home">
      <div className="base-2">
        Airline database!
        <br />
        Select a question which you want an answer to.
      </div>
      <div className="base-3">
        <div>
          <Link to="/question/1">{questions[0].question}</Link>
        </div>
        <div>
          <Link to="/question/2">{questions[1].question}</Link>
        </div>
        <div>
          <Link to="/question/3">{questions[2].question}</Link>
        </div>
        <div>
          <Link to="/question/4">{questions[3].question}</Link>
        </div>
        <div>
          <Link to="/question/5">{questions[4].question}</Link>
        </div>
        <div>
          <Link to="/question/6">{questions[5].question}</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
