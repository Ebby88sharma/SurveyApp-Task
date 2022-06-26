import React from "react";
import { Link } from "react-router-dom";

const FinishsSurvey = ({ Name, totalScore, resetData }) => {
  return (
    <div
      className={
        "border-2 h-full border-gray-600 text-center text-white px-28 py-4 rounded flex flex-col  justify-between"
      }
    >
      <div className={"text-center pt-40"}>
        <p className={"font-bold"}>RESULT</p>
        <h1 className={"text-5xl my-3"}>Your Score</h1>
        <p className={"text-xl"}>{Name}</p>
        <h1 className={"mt-2 text-5xl font-bold"}>{totalScore}</h1>
        <p>Points</p>
        <div
          className={"relative w-[400px] border border-white h-8 mx-auto mt-4"}
        >
          <div
            className={`absolute bg-white top-0 left-0 h-[30px] w-3`}
            style={{ width: `${totalScore}%` }}
          ></div>
        </div>
        <div className={"mt-8"}>
          <Link
            to={"/"}
            className={
              "uppercase  bg-white px-12 text-black font-medium text-lg py-2"
            }
            onClick={resetData}
          >
            start new
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FinishsSurvey;
