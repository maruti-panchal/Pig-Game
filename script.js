const btnNew = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const playerOneCurrScore = document.querySelector("#current--0");
const playerSecondCurrScore = document.querySelector("#current--1");
const holdScoreOne = document.querySelector("#score--0");
const holdScoreTwo = document.querySelector("#score--1");

let activePlayer = 0;
let score1 = 0;
let score2 = 0;
let holdCurrentScore1 = 0;
let holdCurrentScore2 = 0;

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  holdCurrentScore1 = 0;
  holdCurrentScore2 = 0;
  playerOneCurrScore.textContent = '0';
  playerSecondCurrScore.textContent = '0';
  holdScoreOne.textContent = '0';
  holdScoreTwo.textContent = '0';
  activePlayer = 0;
}

rollDice.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    if (activePlayer === 0) {
      score1 += randomNumber;
      playerOneCurrScore.textContent = score1;
    } else {
      score2 += randomNumber;
      playerSecondCurrScore.textContent = score2;
    }
  } else {
    if (activePlayer === 0) {
      score1 = 0;
      playerOneCurrScore.textContent = '0';
      activePlayer = 1;
    } else {
      score2 = 0;
      playerSecondCurrScore.textContent = '0';
      activePlayer = 0;
    }
  }
});

btnHold.addEventListener("click", function () {
  if (activePlayer === 0) {
    holdCurrentScore1 += score1;
    holdScoreOne.textContent = holdCurrentScore1;
    score1 = 0;
    playerOneCurrScore.textContent = '0';
  } else {
    holdCurrentScore2 += score2;
    holdScoreTwo.textContent = holdCurrentScore2;
    score2 = 0;
    playerSecondCurrScore.textContent = '0';
  }

  // Check if any player has won
  if (holdCurrentScore1 >= 100 || holdCurrentScore2 >= 100) {
    alert(`Player ${activePlayer + 1} wins the game!`);
    resetGame();
  } else {
    switchPlayer();
  }
});

// Add event listener for the New Game button
btnNew.addEventListener("click", resetGame);













// const btnNew=document.querySelector(".btn--new");
// const rollDice=document.querySelector(".btn--roll");
// const btnHold=document.querySelector(".btn--hold");
// const dice=document.querySelector(".dice");
// const playerOneCurrScore=document.querySelector("#current--0");
// const playerSecondCurrScore=document.querySelector("#current--1");
// const holdScoreOne=document.querySelector("#score--0");
// const holdScoreTwo=document.querySelector("#score--1");


// let activePlayer=0;
// score1=0;
// score2=0;
// let holdCurrentSCore1=0;
// let holdCurrentSCore2=0;


// rollDice.addEventListener("click",function(){
//   let randomNumber=Math.trunc(Math.random()*6+1);
//   dice.src=`dice-${randomNumber}.png`;
//   if(activePlayer==0){
//     if(randomNumber!==1){
//       score1+=randomNumber;
//       holdCurrentSCore1+=score1;
//       playerOneCurrScore.textContent=score1;
//      }else{
//       score1=0;
//       holdCurrentSCore1=0;
//       holdScoreOne.textContent=holdCurrentSCore1;
//     score1=0;
//       playerOneCurrScore.textContent=score1;
//       activePlayer=1;
//     }
//   }else{
//     if(activePlayer==1){
//       if(randomNumber!==1){
//         score2+=randomNumber;
//         holdCurrentSCore2=score2;
//         playerSecondCurrScore.textContent=score2;
//        }else{
//         score2=0;
//         holdCurrentSCore2=0;
//         holdScoreTwo.textContent=holdCurrentSCore2;
//     score2=0;
//         playerSecondCurrScore.textContent=score2;
//         activePlayer=0;
//       }
//   }
// }
// });

// btnHold.addEventListener("click",function(){
//   if(activePlayer==0){
//    holdScoreOne.textContent=holdCurrentSCore1;
//     score1=0;
//     playerOneCurrScore.textContent=score1;
//     activePlayer=1;
//   }
//   else{
//     holdScoreTwo.textContent=holdCurrentSCore2;
//     score2=0;
//     playerSecondCurrScore.textContent=score2;
//     activePlayer=0
//   }
 
// })