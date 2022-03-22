import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function TextAreaInput({ question, onAnswerChange }) {
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
      id="text-area"
      multiline
      rows={3}
      value={answer}
      onChange={handleChange}
    />
  );
}

export default TextAreaInput;
