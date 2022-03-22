import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

function CheckboxInput({ question, onAnswerChange }) {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    question.answer && setAnswer(question.answer);
  }, [question]);

  const handleChange = (value) => {
    setAnswer(value);
    onAnswerChange(value);
  };

  return (
    <>
      {question.questionoption.map((option) => {
        return (
          <FormControlLabel
            key={option.optionvalue}
            control={
              <Checkbox
                checked={answer === option.optionvalue}
                onChange={() => handleChange(option.optionvalue)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label={option.optionvalue}
          />
        );
      })}
    </>
  );
}

export default CheckboxInput;
