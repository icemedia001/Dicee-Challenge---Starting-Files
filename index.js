function getRandomNumber(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
var randomNumber1 = getRandomNumber(1, 6);
var randomNumber2 = getRandomNumber(1, 6);

var dice1 = "./images/dice" + randomNumber1 + ".png"
var dice2 = "./images/dice" + randomNumber2 + ".png"

var dice = document.querySelector(".img1");
var diceTwo = document.querySelector(".img2");

dice.src = dice1;
diceTwo.src = dice2;

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerText = "Player One Wins"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = "Player Two Wins"
} else{
  document.querySelector("h1").innerText = "Draw!"
}