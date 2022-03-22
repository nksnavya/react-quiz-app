import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";

function RadioInput({ question, onAnswerChange }) {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    question.answer && setAnswer(question.answer);
  }, [question]);

  const handleChange = (e) => {
    setAnswer(e.target.value);
    onAnswerChange(e.target.value);
  };

  return (
    <RadioGroup value={answer} onChange={handleChange}>
      {question.questionoption.map((options) => {
        return (
          <FormControlLabel
            key={options.optionvalue}
            label={options.optionvalue}
            control={<Radio />}
            value={options.optionvalue}
          />
        );
      })}
    </RadioGroup>
  );
}

export default RadioInput;
