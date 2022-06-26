import React from "react";

const ProgressBar = ({ step }) => {
  const progress = ((step / 3) * 100).toFixed(1);
  return (
    <div className={"flex flex-col w-11/12 mt-20"}>
      <div className={"flex justify-end mb-2"}>
        <h1>Question No.{step} from 3</h1>
      </div>
      <div
        className={
          "w-11/12 mx-auto bg-black h-2 rounded-lg relative border border-gray-400"
        }
      >
        <div
          style={{ width: `${progress}%`, background: "white" }}
          className={`h-[6px] rounded`}
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
