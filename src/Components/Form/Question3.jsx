import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { ArrowCircleRight, ArrowLeft } from "phosphor-react";
import ProgressBar from "./ProgressBar";

const Question3 = ({
  answers,
  setAnswers,
  steps,
  previousStep,
  nextStep,
  name,
  error,
}) => {
  const [country, setCountry] = useState("");
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
        <p className={"mb-4"}>Question 3</p>
        <h1 className={"text-3xl mb-6"}>Where Are you From ?</h1>
        <TextField
          InputLabelProps={{ className: "InputField" }}
          InputProps={{ className: "InputField" }}
          value={country}
          sx={{
            width: "400px",
          }}
          color={"white"}
          select
          autoFocus
          label={"Select Country"}
        >
          <MenuItem
            value={"Germany"}
            onClick={() => {
              setAnswers({ ...answers, thirdAnswer: 3 });
              setCountry("Germany");
            }}
          >
            Germany
          </MenuItem>
          <MenuItem
            value={"Sweden"}
            onClick={() => {
              setAnswers({ ...answers, thirdAnswer: 5 });
              setCountry("Sweden");
            }}
          >
            Sweden
          </MenuItem>
          <MenuItem
            value={"Italy"}
            onClick={() => {
              setAnswers({ ...answers, thirdAnswer: 5 });
              setCountry("Italy");
            }}
          >
            Italy
          </MenuItem>
          <MenuItem
            value={"Spain"}
            onClick={() => {
              setAnswers({ ...answers, thirdAnswer: 3 });
              setCountry("Spain");
            }}
          >
            Spain
          </MenuItem>
        </TextField>
        {error && (
          <h1 className={"text-red-600"}>Choose your country, {name}.</h1>
        )}
        <div className={"flex flex-col justify-center"}>
          <button
            onClick={nextStep}
            className={
              "font-bold uppercase flex items-center w-fit mt-16 bg-white mx-auto px-16 py-3 justify-center text-black"
            }
          >
            FINISH <ArrowCircleRight size={25} className={"ml-2"} />
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
export default Question3;
