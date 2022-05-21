import React from "react";

function GradeCalculator(props) {
  const calculate = () => {
    let values = document.getElementsByClassName("earned");
    let max = document.getElementsByClassName("max");
    let total = 0;
    let earned = 0;
    let result = document.getElementById("result");
    let percentage = 0;

    for (let i = 0; i < values.length; i++) {
      const element = values[i].value;
      earned += element;
      const element1 = max[i].value;
      total += element1;
    }
    percentage = (earned / total) * 100;
    displayResult();
    function displayResult() {
      let paragraph = document.getElementById("result");
      paragraph.innerHTML = `result is ${percentage}`;
      if (percentage > 50) {
        paragraph.classList.add("text-green-600");
      } else {
        paragraph.classList.add("text-red-800");
      }
    }
  };
  return props.trigger ? (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 h-screen z-50 opacity-100 outline-none focus:outline-none">
      <div className="h-max bg-stone-50 w-1/3 ml-auto mx-auto mt-32 shadow-xl rounded-xl shadow-grey pl-32 relative">
        <div
          className="absolute right-0 top-0 text-4xl text-slate-400"
          onClick={() => {
            props.setTrigger(false);
            props.setBackgroundOpacity(`opacity-100`);
          }}
        >
          <i class="far fa-times-circle"></i>
        </div>
        <h1 className="text-teal-700 text-xl ml-16 mb-8 underline">
          Grade calculator
        </h1>
        <div>
          <label className="block text-xl">HW1: </label>{" "}
          <input
            type="number"
            size="2"
            className=" earned w-32 inline h-12 rounded-sm border-solid border-b-2 border-teal-500 block mt-2 focus:outline-none"
          />{" "}
          /
          <input
            type="number"
            size="2"
            className="w-32 max inline h-12 rounded-sm border-solid border-b-2 border-teal-500 block mt-2 focus:outline-none"
          />
        </div>
        <div>
          <label className="block number-xl">HW2</label>{" "}
          <input
            type="number"
            size="2"
            className="earned w-32 inline h-12 rounded-sm border-solid border-b-2 border-teal-500 block mt-2 focus:outline-none"
          />{" "}
          /
          <input
            type="number"
            size="2"
            className="w-32 max inline h-12 rounded-sm border-solid border-b-2 border-teal-500 block mt-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block number-xl">HW3</label>{" "}
          <input
            type="number"
            size="2"
            className="earned w-32 inline h-12 rounded-sm border-solid border-b-2 border-teal-500 block mt-2 focus:outline-none"
          />
          <label className="number-xl">/</label>
          <input
            type="number"
            size="2"
            className="w-32 max inline h-12 rounded-sm border-solid border-b-2 border-teal-500 block mt-2 focus:outline-none"
          />
        </div>
        <div>
          <label> Curve + 5</label>
          <input type="checkbox" id="curve"></input>
          <div id="resultarea">
            <button
              id="compute"
              onClick={calculate}
              className="w-1/3 bg-teal-600 rounded-sm number-white mt-8 ml-16 h-8"
            >
              compute!
            </button>
            <p id="result"></p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default GradeCalculator;
