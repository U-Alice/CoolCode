import React from "react";

function Reverser(props) {
  const reverse = () => {
    let input = document.getElementById("phrase");
    let filter = document.getElementById("filter");
    let button = document.getElementById("button");
    let content = document.getElementById("words");
    let elements = document.getElementsByTagName("input");

    content.innerHTML = "";
    let sentence = input.value;
    let array = sentence.split(" ");

    if (filter.value.length !== 0) {
      let wordsToFilter = sentence.match(filter.value);

      for (let j = 0; j < array.length; j++) {
        const displays = array[j];
        const result = array.filter(
          (displays) => !displays.includes(filter.value)
        );
        array = result;
      }
      for (let index = array.length - 1; index >= 0; index--) {
        content.classList.add("word");
        let newList = document.createElement("li");
        newList.innerHTML += array[index] + " ";
        content.appendChild(newList);
      }
    } else {
      for (let index = array.length - 1; index >= 0; index--) {
        content.classList.add("word");
        let newList = document.createElement("li");
        newList.innerHTML += array[index] + " ";
        content.appendChild(newList);
      }
    }
  };
  return props.trigger ? (
    <React.Fragment>
      <title>sentence reverser</title>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 h-screen z-50 opacity-100 outline-none focus:outline-none">
        <div className="h-96 bg-white w-1/3 ml-auto mx-auto mt-32 shadow-xl rounded-xl shadow-grey relative">
          <div
            className="absolute right-0 top-0 text-4xl text-slate-400"
            onClick={() => {
              props.setTrigger(false);
              props.setBackgroundOpacity(`opacity-100`)
            }}
          >
           <i class="far fa-times-circle"></i>
          </div>
          <h1 className="font-arima font-bold ml-32 text-2xl text-blue-900 underline">
            Sentence reverser
          </h1>
          <div className="main1">
            <div>
              <form className="ml-12 mt-12">
                <label className="block text-xl text-teal-700">Phrase:</label>
                <input
                  type="text"
                  placeholder="enter your phrase"
                  id="phrase"
                  className="h-12 rounded-sm w-3/4 shadow-sm shadow-slate focus:outline-none pl-4"
                />
                <label className="block text-xl text-teal-700">
                  {" "}
                  filter:{" "}
                </label>
                <input
                  type="text"
                  placeholder="enter your filter category"
                  id="filter"
                  className="h-12 rounded-sm w-2/3 shadow-sm shadow-slate text-white focus:outline-none pl-4"
                />
                <button
                  type="button"
                  id="button"
                  onClick={reverse}
                  className="h-8 text-white rounded-sm mt-4 bg-blue-900 w-1/4 block"
                >
                  GO
                </button>
                <div id="words">
                  <span id="output">Output is displayed here</span>
                </div>
              </form>
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </React.Fragment>
  ) : (
    ""
  );
}
export default Reverser;
