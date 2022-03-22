import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function DateInput({ question, onAnswerChange }) {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    question.answer && setAnswer(question.answer);
  }, [question]);

  const handleChange = (e) => {
    setAnswer(e.target.value);
    onAnswerChange(e.target.value);
  };

  return (
    <TextField
      id="date-input"
      type="datetime-local"
      value={answer}
      onChange={handleChange}
    />
  );
}

export default DateInput;
