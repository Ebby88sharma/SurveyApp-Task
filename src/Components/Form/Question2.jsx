import React, { useState } from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { ArrowCircleRight, ArrowLeft } from "phosphor-react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ProgressBar from "./ProgressBar";

const Question2 = ({
  setAnswers,
  answers,
  nextStep,
  previousStep,
  steps,
  name,
  error,
}) => {
  const [option, setOption] = useState(0);
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
        <p className={"mb-4"}>Question 2</p>
        <h1 className={"text-3xl mb-6"}>Please Select at least one option</h1>
        <FormControl>
          <RadioGroup row={true} className={"mx-auto flex justify-center"}>
            <FormControlLabel
              onChange={() => {
                setAnswers({ ...answers, secondAnswer: 2 });
                setOption(1);
              }}
              checked={option === 1}
              control={
                <Radio
                  color={"white"}
                  icon={<CheckBoxOutlineBlankIcon className={"text-white "} />}
                  checkedIcon={<CheckBoxIcon />}
                />
              }
              label={"Option 1"}
            />
            <FormControlLabel
              onChange={() => {
                setAnswers({ ...answers, secondAnswer: 2 });
                setOption(2);
              }}
              checked={option === 2}
              control={
                <Radio
                  color={"white"}
                  icon={<CheckBoxOutlineBlankIcon className={"text-white "} />}
                  checkedIcon={<CheckBoxIcon />}
                />
              }
              label={"Option 2"}
            />
            <FormControlLabel
              onChange={() => {
                setAnswers({ ...answers, secondAnswer: 2 });
                setOption(3);
              }}
              checked={option === 3}
              control={
                <Radio
                  color={"white"}
                  icon={<CheckBoxOutlineBlankIcon className={"text-white "} />}
                  checkedIcon={<CheckBoxIcon />}
                />
              }
              label={"Option 3"}
            />
          </RadioGroup>
          {error && (
            <h1 className={"text-red-600"}>Please choose one option {name}</h1>
          )}
        </FormControl>
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
export default Question2;
