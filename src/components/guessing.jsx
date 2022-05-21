
function Guessing() {
    const number = Math.floor(Math.random() * 100);
    console.log(number)
  const guess = () => {
    const guessedNumber = document.getElementById("number");
    let button = document.getElementById("makeguess");
    let counter = 0;
    let result = document.getElementById("result");
    let progress = document.getElementById("progress");
    let textnode = "";
    let progressDisplay = "";
      if (guessedNumber.value > number) {
        progressDisplay = "too high";
        counter += 1;
        newParagraph();
      } else if (guessedNumber.value == number) {
        console.log("you got it right");
        progressDisplay = ` you succeeded after ${counter} total trials`;
        newParagraph();
        document.getElementById("makeguess").disabled = true;
      } else {
        console.log(number);
        progressDisplay = "too low";
        counter += 1;
        newParagraph();
      }
    ;
    function newParagraph() {
      const list = document.createElement("li");
      textnode = document.createTextNode(`${guessedNumber.value}`);
      list.appendChild(textnode);
      result.appendChild(list);
      progress.innerHTML = progressDisplay;
    }
  };
  return (
    <div>
      <title>Guessing Game</title>
        <div className="h-screen mt-0  bg-white w-full">
          <div className="w-1/2 bg-blue-200 h-96 rounded-sm drop-shadow ml-auto mx-auto mt-32 ">
        <h1 className="text-yellow-600 text-3xl drop-shadow ml-64 3">Guessing game</h1>
        <div className="mt-12 pl-64">
          <label className="block font-quickSand text-xl text-teal-600">Enter your number</label>
          <input type="text" id="number"  className="earned w-32 inline h-12 rounded-sm border-solid border-b-2 border-teal-500 block mt-2 focus:outline-none"/>
          <button id="makeguess" onClick={guess} className="block h-12 w-32 bg-red-500 text-white rounded-sm text-sm mt-8">Make guess</button>
          <span id="progress"></span>
        </div>
        <div id="result"></div>
        </div> 
    </div>
    </div>
  );
}
export default Guessing;
