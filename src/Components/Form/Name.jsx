import React from "react";
import { TextField } from "@mui/material";
import { ArrowLeft, ArrowCircleRight } from "phosphor-react";

const Name = ({ name, setName, nextStep, previousStep, error }) => {
  return (
    <div
      className={
        "border-2 h-full border-gray-600 text-center text-white py-28 pt-40 rounded "
      }
    >
      <p className={" text-sm w-1/2 mx-auto uppercase"}> Who are you ?</p>
      <h1 className={"text-5xl font-bold"}>Please enter your name.</h1>
      <div className={"mt-8"}>
        <TextField
          label={"Name"}
          variant={"standard"}
          autoFocus
          placeholder={"John Doe"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputLabelProps={{ style: { color: "white" } }}
          color={"gray"}
          sx={{ input: { color: "wheat" }, width: "40%", borderColor: "red" }}
        />
        {error && (
          <h1 className={"text-red-600"}>Please enter your name .....</h1>
        )}
      </div>
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
  );
};
export default Name;
