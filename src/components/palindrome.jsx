import React from "react";
function Palindrome(props) {
  const palindrome = () => {
    let input = document.getElementById("phrase");
    let button = document.getElementById("button");
    let uLEl = document.getElementById("UlElement");
    let numberOfPalindromes = uLEl.childNodes.length;
    let paragraph = document.getElementById("countDisplay");
    let newList = "";
    let maxValue = document.getElementById("max");
    let minValue = document.getElementById("min");
    let count = 0;

    let wordsInPhrase = input.value.split(" ");
    for (let index = 0; index < wordsInPhrase.length; index++) {
      let element = wordsInPhrase[index];
      let eachWord = element.split("");
      let reversedWord = "";
      for (let i = eachWord.length - 1; i >= 0; i--) {
        reversedWord += eachWord[i];
        count++;
      }
      if (reversedWord === element && reversedWord.length >= minValue.value) {
        if (maxValue.value != 0) {
          if (reversedWord.length <= maxValue.value) {
            getPalindrome(reversedWord);
          }
        } else {
          getPalindrome(reversedWord);
        }
      }
    }
    console.log("clicked");
    function getPalindrome(word) {
      newList = `<li>${word}</li>`;
      uLEl.innerHTML += newList;
      numberOfPalindromes += 1;
      if (numberOfPalindromes > 1) {
        paragraph.innerHTML = `${numberOfPalindromes} palindromes have been found`;
      } else {
        paragraph.innerHTML = `${numberOfPalindromes} palindrome has been found`;
      }
      console.log(numberOfPalindromes);
    }
  };
  return props.trigger ? (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 h-screen z-50 opacity-100 outline-none focus:outline-none">
      <div className="w-1/3 bg-blue-300  rounded-sm ml-auto mx-auto mt-32 shadow-xl shadow-slate-300 relative">
        <div
          className="absolute right-0 top-0 text-4xl text-teal-300"
          onClick={() => {
            props.setTrigger(false);
            props.setBackgroundOpacity(`opacity-100`);
          }}
        >
          <i class="far fa-times-circle"></i>
        </div>
        <div className="ml-32">
          <h1 className="text-teal-700 text-2xl ml-32">Find Palindrome</h1>
          <label className="block text-white text-xl">Phrase:</label>
          <input
            type="text"
            placeholder="enter your text"
            id="phrase"
            className="w-1/2 h-12 rounded-sm border-solid border-b-2 border-teal-500 block mt-2 focus:outline-none"
          />
          <label className="block text-white text-xl mt-2">length:</label>
          <input
            type="text"
            placeholder="max"
            id="max"
            className="w-1/2 h-12 rounded-sm border-solid border-b-2 border-orange-100 block mt-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="min"
            id="min"
            className="w-1/2 h-12 rounded-sm border-solid border-b-2 border-slate-500 block mt-2 focus:outline-none"
          />
          <button
            id="button"
            onClick={palindrome}
            className="w-1/3 bg-teal-600 rounded-sm text-white mt-8 ml-16 h-8"
          >
            find Palindrome
          </button>
          <ul id="UlElement"></ul>
          <p id="countDisplay"></p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Palindrome;
