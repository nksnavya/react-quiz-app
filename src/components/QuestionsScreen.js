import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import {
  FormControl,
  FormLabel,
  Container,
  Typography
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import QUESTION_LIST from "../data/question.json";
import RadioInput from "../common/RadioInput";
import TextAreaInput from "../common/TextAreaInput";
import DateInput from "../common/DateInput";
import CheckboxInput from "../common/CheckboxInput";
import Answers from "./Answers";

function QuestionsScreen() {
  const [questionList, setQuestionList] = useState(QUESTION_LIST.questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showAnswers, setShowAnswers] = useState(false);
  const totalQuestions = QUESTION_LIST.questions.length - 1;

  const getNextQuestion = () => {
    if (answer && answer !== questionList[currentQuestion].answer) {
      const updatedQuestionsList = [...questionList];
      updatedQuestionsList[currentQuestion].answer = answer;
      setQuestionList(updatedQuestionsList);
      setAnswer("");
    }
    if (currentQuestion === totalQuestions) {
      setShowAnswers(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getPrevQuestion = () => {
    if (answer) {
      setAnswer("");
    }
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleAnswer = (answer) => {
    setAnswer(answer);
  };

  const question = questionList[currentQuestion];

  return (
    <Container sx={{ p: 5 }}>
      <Typography variant="h5" sx={{ pb: 2 }}>
        Mock Interview
      </Typography>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          {showAnswers ? (
            <Answers data={questionList} />
          ) : (
            <FormControl>
              <FormLabel>{`${question.questionid}. ${question.question}`}</FormLabel>
              {question.questiontype === "Radio" && (
                <RadioInput question={question} onAnswerChange={handleAnswer} />
              )}
              {question.questiontype === "Textarea" && (
                <TextAreaInput
                  question={question}
                  onAnswerChange={handleAnswer}
                />
              )}
              {question.questiontype === "Date" && (
                <DateInput question={question} onAnswerChange={handleAnswer} />
              )}
              {question.questiontype === "Checkbox" && (
                <CheckboxInput
                  question={question}
                  onAnswerChange={handleAnswer}
                />
              )}
            </FormControl>
          )}
        </CardContent>
        {!showAnswers && (
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            {currentQuestion > 0 && (
              <Button variant="contained" onClick={getPrevQuestion}>
                Previous
              </Button>
            )}
            <Button
              variant="contained"
              color="warning"
              onClick={getNextQuestion}
            >
              {currentQuestion < totalQuestions ? "Next" : "Submit"}
            </Button>
          </CardActions>
        )}
      </Card>
    </Container>
  );
}

export default QuestionsScreen;
