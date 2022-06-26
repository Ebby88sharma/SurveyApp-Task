import React from "react";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "phosphor-react";

const LandingPage = () => {
  return (
    <div
      className={
        "border-2 h-full border-gray-600 text-center text-white py-28 pt-40 rounded "
      }
    >
      <h1 className={"text-5xl font-bold"}>Welcome to our Survey.</h1>
      <p className={"pt-8 text-sm w-1/2 mx-auto"}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <Link
        to={"/survey"}
        className={
          "font-bold uppercase flex items-center w-fit mt-16 bg-white mx-auto px-8 py-3 justify-center text-black"
        }
      >
        Start the survey <ArrowCircleRight size={25} className={"ml-2"} />
      </Link>
    </div>
  );
};
export default LandingPage;
