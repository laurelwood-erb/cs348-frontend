/** @format */

import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/Input";
import apiInput from "../helpers/apiInput";
import outputFormat from "../helpers/outputFormat";
import { questions } from "../helpers/Questions";
import NotFoundPage from "./NotFoundPage";

const ShowQuestion = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [pressed, setPressed] = useState(false);
  const [outputValue, setOutputValue] = useState("");

  const { id } = useParams();
  const qNum = Number(id) - 1;

  const validId = qNum >= 0 && qNum <= 6;
  if (!validId) {
    return <NotFoundPage />;
  }
  const api = questions[qNum].api;

  const handleInput1Change = (e, newInput) => setInput1(newInput);
  const handleInput2Change = (e, newInput) => setInput2(newInput);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(api + apiInput(qNum, input1, input2));
    try {
      const response = await axios.get(api + apiInput(qNum, input1, input2));
      const data = response.data;
      setOutputValue(outputFormat(qNum, data));
    } catch (error) {
      console.error("Error fetching data:", error);
      setOutputValue("Error fetching data");
    }
    setPressed(true);
  };

  return (
    <div className="home">
      <div className="base-2">{questions[qNum].question}</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>{questions[qNum].instruction}&nbsp;</label>
          <Input qNum={qNum} input={input1} handleChange={handleInput1Change} />
        </div>
        {(qNum === 4 || qNum === 5) && (
          <div className="input-container">
            <label>
              Enter destination {qNum === 4 ? "airport" : "country"}:&nbsp;
            </label>
            <Input
              qNum={qNum}
              input={input2}
              handleChange={handleInput2Change}
            />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      {pressed && (
        <div className="query-result">
          {outputValue === "" ? "No result" : "Result: " + outputValue}
        </div>
      )}
    </div>
  );
};

export default ShowQuestion;
