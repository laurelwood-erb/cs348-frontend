import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { questions } from "../helpers/Questions";
import NotFoundPage from "./NotFoundPage";

const ShowQuestion = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const { id } = useParams();
  const qNum = Number(id) - 1;
  const validId = qNum >= 0 && qNum <= 5;

  if (!validId) {
    return <NotFoundPage />;
  }

  const numInputs = qNum === 4 || qNum === 5 ? 2 : 1;
  const api = questions[qNum].api;

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(api);
      const data = response.data;

      setOutputValue(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setOutputValue("Error fetching data");
    }
  };

  return (
    <div className="home">
      <div className="base-2">{questions[qNum].question}</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>{questions[qNum].instruction}&nbsp;</label>
          <input type="text" value={input1} onChange={handleInput1Change} />
        </div>
        {numInputs === 2 && (
          <div className="input-container">
            <label>Enter second airport:&nbsp;</label>
            <input type="text" value={input2} onChange={handleInput2Change} />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      {outputValue === "" ? null : (
        <div className="query-result">Result: {outputValue}</div>
      )}
    </div>
  );
};

export default ShowQuestion;
