import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { ArrowLeft, ArrowCircleRight } from "phosphor-react";
import ProgressBar from "./ProgressBar";

const Question1 = ({
  nextStep,
  previousStep,
  name,
  setAnswers,
  answers,
  steps,
  error,
}) => {
  return (
    <div
      className={
        "border-2 h-full border-gray-600 text-center text-white px-28 py-4 rounded flex flex-col  justify-between"
      }
    >
      <div className={"flex justify-end"}>
        <h1 className={"text-right absolute top-8 right-8"}>
          SURVEY FOR: {name}
        </h1>
      </div>
      <div className={"mx-auto"}>
        <p className={"mb-4"}>Question 1</p>
        <h1 className={"text-3xl mb-6"}>
          How often do you visit this website ?
        </h1>
        <RadioGroup row={true} className={"mx-auto flex justify-center"}>
          <FormControlLabel
            onChange={() => setAnswers({ ...answers, firstAnswer: 5 })}
            checked={answers.firstAnswer === 5}
            control={
              <Radio
                color={"white"}
                icon={<RadioButtonUncheckedIcon className={"text-white "} />}
                checkedIcon={<CheckCircleIcon />}
              />
            }
            label={"Often"}
          />
          <FormControlLabel
            onChange={() => setAnswers({ ...answers, firstAnswer: 3 })}
            checked={answers.firstAnswer === 3}
            control={
              <Radio
                color={"white"}
                icon={<RadioButtonUncheckedIcon className={"text-white "} />}
                checkedIcon={<CheckCircleIcon />}
              />
            }
            label={"Rarley"}
          />
          <FormControlLabel
            onChange={() => setAnswers({ ...answers, firstAnswer: 0 })}
            checked={answers.firstAnswer === 0}
            control={
              <Radio
                color={"white"}
                icon={<RadioButtonUncheckedIcon className={"text-white "} />}
                checkedIcon={<CheckCircleIcon />}
              />
            }
            label={"Never"}
          />
        </RadioGroup>
        {error && (
          <h1 className={"text-red-600"}>Please choose your answer, {name}.</h1>
        )}
        <div className={"flex flex-col justify-center"}>
          <button
            onClick={nextStep}
            className={
              "font-bold uppercase flex items-center w-fit mt-16 bg-white mx-auto px-16 py-3 justify-center text-black"
            }
          >
            Next <ArrowCircleRight size={25} className={"ml-2"} />
          </button>
          <button
            onClick={previousStep}
            className={
              "font-bold uppercase flex items-center w-fit mt-2 mx-auto px-16 py-3 justify-center text-white"
            }
          >
            <ArrowLeft size={20} className={"mr-2"} /> Back
          </button>
        </div>
      </div>
      <ProgressBar step={steps} />
    </div>
  );
};
export default Question1;
