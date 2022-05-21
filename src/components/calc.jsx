import './calc.css';
function Calc() {
  const numberEl = document.getElementsByClassName("number");
  const AC = document.getElementById("AC");
  console.log(numberEl)

  let calculation = [];
  const operationEl = document.getElementsByClassName("operation");
  let operand = 0;

  function update() {
    for (let i = 0; i < calculation.length; i++) {
      document.getElementById("calculationArea").value += calculation[i];
      console.log(calculation);
    }
  }
  const clear = () => {
    document.getElementById("calculationArea").value = "";
  };

  function update1() {
    for (let i = 0; i < calculation.length; i++) {
      document.getElementById("calculationArea").value += " " + calculation[i] + " ";
    }
  }

  function calculate(calc) {
    localStorage.setItem("operand", calc);
  }

  
   const numberClicked =(e)=>{
       console.log(e.target.id)
      calculation = [];
      calculation.push(e.target.id);
      update();
   }
  
  const operationClicked = (e)=>{
      calculation = [];
      calculation.push(e.target.id);
      update1();
  }

  const final = ()=>{
    let result = 0;
    let array = document.getElementById("calculationArea").value.split(" ");
    console.log(array);

    switch (array[1]) {
      case "+":
        result = addNumbers(array[0], array[2]);

        break;
      case "/":
        result = array[0] / array[2];
        break;
      case "*":
        result = array[0] * array[2];
        break;
      case "-":
        result = array[0] - array[2];
        break;
      default:
        result = "invalid operation";
        break;
    }
    console.log(result);
    document.getElementById("calculationArea").value = result;
  };
  function addNumbers(a, b) {
    console.log(a, b);
    return parseFloat(a) + parseFloat(b);
  }

  return (
    <div class="main">
      <div class="calculator">
        <div class="calculation">
          <input id="calculationArea" type="text" />
        </div>
        <div class="output">
          <button class="AC" id="AC" onClick={clear}>
            AC
          </button>
          <button className="del" id="del" onClick={clear}>
            {" "}
            DEL
          </button>
          <button type="button" className="operation" onClick={operationClicked} id="/">
            /
          </button>
          <button type="button" className="number" id="1" onClick={numberClicked}>
            1
          </button>
          <button type="button" className="number" onClick={numberClicked} id="2">
            2
          </button>
          <button type="button" className="number" onClick={numberClicked} id="3">
            3
          </button>
          <button type="button" className="operation" onClick={operationClicked} id="*">
            *
          </button>
          <button type="button" className="number" onClick={numberClicked} id="4">
            4
          </button>
          <button type="button" className="number" onClick={numberClicked} id="5">
            5
          </button>
          <button type="button" className="number" onClick={numberClicked} id="6">
            6
          </button>
          <button type="button" className="operation" onClick={operationClicked} id="+">
            +
          </button>
          <button type="button" className="number" onClick={numberClicked} id="7">
            7
          </button>
          <button type="button" className="number" onClick={numberClicked} id="8">
            8
          </button>
          <button type="button" className="number" onClick={numberClicked} id="9">
            9
          </button>
          <button type="button" className="operation" onClick={operationClicked} id="-">
            -
          </button>
          <button type="button" className="number" onClick={numberClicked} id=".">
            .
          </button>

          <button type="button" className="number" onClick={numberClicked} id="0">
            0
          </button>
          <button className="AC" id="equal" onClick={final}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
