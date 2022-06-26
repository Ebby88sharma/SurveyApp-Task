import { useState } from "react";
import { NavLink } from "react-router-dom";
import { createTheme } from "@mui/material";
import Name from "./Form/Name";
import Question1 from "./Form/Question1";
import Question2 from "./Form/Question2";
import Question3 from "./Form/Question3";
import FinishQuiz from "./Form/FinishQuiz";

export const theme = createTheme({
  palette: {
    gray: {
      main: "#4b5563",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
    },
    bebe: {
      main: "#659568",
    },
    black: {
      main: "#ffffff",
    },
  },
});

const Survey = () => {
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState({
    firstAnswer: null,
    secondAnswer: null,
    thirdAnswer: null,
  });
  const FinalDegree =
    (answers.firstAnswer + answers.secondAnswer + answers.thirdAnswer) / 0.16;
  const resetData = () => {
    setStep(0);
    setAnswers({ firstAnswer: null, secondAnswer: null, thirdAnswer: null });
    setName("");
  };
  const NextStep = () => {
    if (step === 0) {
      if (!name) {
        setError(true);
      } else {
        setError(false);
        setStep((step) => step + 1);
      }
    } else if (step === 1) {
      if (isNaN(answers.firstAnswer)) {
        setError(true);
      } else {
        setError(false);
        setStep((step) => step + 1);
      }
    } else if (step === 2) {
      if (!answers.secondAnswer) {
        setError(true);
      } else {
        setError(false);
        setStep((step) => step + 1);
      }
    } else {
      if (!answers.thirdAnswer) {
        setError(true);
      } else {
        setError(false);
        setStep((step) => step + 1);
      }
    }
  };
  const previousStep = () => {
    if (step === 0) {
      alert("These is the first Page.");
    } else {
      setStep((step) => step - 1);
    }
  };
  switch (step) {
    case 0:
      return (
        <Name
          name={name}
          setName={setName}
          nextStep={NextStep}
          previousStep={previousStep}
          error={error}
        />
      );
    case 1:
      return (
        <Question1
          nextStep={NextStep}
          previousStep={previousStep}
          setAnswers={setAnswers}
          name={name}
          answers={answers}
          steps={step}
          error={error}
        />
      );
    case 2:
      return (
        <Question2
          nextStep={NextStep}
          previousStep={previousStep}
          setAnswers={setAnswers}
          name={name}
          answers={answers}
          steps={step}
          error={error}
        />
      );
    case 3:
      return (
        <Question3
          nextStep={NextStep}
          previousStep={previousStep}
          setAnswers={setAnswers}
          name={name}
          answers={answers}
          steps={step}
          error={error}
        />
      );
    case 4:
      return (
        <FinishQuiz
          Name={name}
          totalScore={FinalDegree}
          resetData={resetData}
        />
      );
    default:
      return <NavLink to={"/"} />;
  }
};
export default Survey;
