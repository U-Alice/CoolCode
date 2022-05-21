function BlackJack() {
  let cards = [];
  let sum = 0;
  let credits = 0;
  let message = "";
  let isAlive = false;
  let hasBlackJack = false;
  function getRandom() {
    let number = Math.floor(Math.random() * 13) + 1;
    return number;
  }

  const startGame = () => {
    isAlive = true;
    let firstCard = getRandom();
    let secondCard = getRandom();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  };
  function renderGame() {
    document.getElementById("sum").innerHTML = "sum:" + sum;
    document.getElementById("cards-el").innerText = "cards:";
    for (let i = 0; i < cards.length; i++) {
      document.getElementById("cards-el").innerText += cards[i] + ",";
    }
    if (sum < 21) {
      message = "you are still in the game";
      isAlive = true;
      credits += 5;
    } else if (sum === 21) {
      message = "whooohoo you have got a blackjack";
      hasBlackJack = true;
      credits += 10;
    } else {
      message = "you are out of the game";
      isAlive = false;
    }
    document.getElementById("progress").innerHTML = message;
    document.getElementById("credits").innerHTML =
      "your score is" + " " + credits;
  }

  const pickNew = () => {
    if (isAlive === true && hasBlackJack === false) {
      let newCard = getRandom();
      cards.push(newCard);
      sum += newCard;
      renderGame();
    }
  };
  return (
    <div id="section" className="h-96 bg-blue-900 w-1/3 pl-32 ml-auto mx-auto mt-32 pt-12">
      <h1 className="font-pacifico text-white text-3xl drop-shadow ">BLACKJACK game</h1>
      <p id="progress" className="font-arima font-extrabold text-white text-2xl mt-8 underline">Progress</p>
      <p id="cards-el" className="font-mono text-2xl text-white">cards:</p>
      <p id="sum" className="mt-8 text-white font-mono">SUM:</p>
      <button onClick={startGame} className="w-1/3 bg-white text-blue-900 h-8 rounded-sm mt-12">START GAME</button>
      <button onClick={pickNew} className="w-1/3  bg-white text-blue-900 h-8 rounded-sm ml-4 ">Pick New card</button>
      <p id="credits" className="text-2xl mt-4 text-white"></p>
    </div>
  );
}
export default BlackJack;
