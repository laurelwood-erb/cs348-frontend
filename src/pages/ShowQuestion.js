import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/Input";
import { questions } from "../helpers/questions";
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
  const api = questions[qNum].api;

  const handleInput1Change = (e, newInput) => setInput1(newInput);
  const handleInput2Change = (e, newInput) => setInput2(newInput);

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
      {outputValue === "" ? null : (
        <div className="query-result">Result: {outputValue}</div>
      )}
    </div>
  );
};

export default ShowQuestion;
