var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);
var playerRolled1=false;
var playerRolled2=false;
function playerDice1(){
    playerRolled1=true;
if(randomNumber1===1){
    document.querySelector(".img1").setAttribute("src","/images/dice1.png");
}
else if(randomNumber1===2){
    document.querySelector(".img1").setAttribute("src","/images/dice2.png");
}
else if(randomNumber1===3){
    document.querySelector(".img1").setAttribute("src","/images/dice3.png");
}
else if(randomNumber1===4){
    document.querySelector(".img1").setAttribute("src","/images/dice4.png");
}
else if(randomNumber1===5){
    document.querySelector(".img1").setAttribute("src","/images/dice5.png");
}
else if(randomNumber1===6){
    document.querySelector(".img1").setAttribute("src","/images/dice6.png");
}
if(playerRolled1 && playerRolled2){
    result(randomNumber1,randomNumber2);
}
}


function playerDice2(){
    playerRolled2=true;
if(randomNumber2===1){
    document.querySelector(".img2").setAttribute("src","/images/dice1.png");
}
else if(randomNumber2===2){
    document.querySelector(".img2").setAttribute("src","/images/dice2.png");
}
else if(randomNumber2===3){
    document.querySelector(".img2").setAttribute("src","/images/dice3.png");
}
else if(randomNumber2===4){
    document.querySelector(".img2").setAttribute("src","/images/dice4.png");
}
else if(randomNumber2===5){
    document.querySelector(".img2").setAttribute("src","/images/dice5.png");
}
else if(randomNumber2===6){
    document.querySelector(".img2").setAttribute("src","/images/dice6.png");
}
if(playerRolled1 && playerRolled2){
    result(randomNumber1,randomNumber2);
}

}
playerRolled1=false;
playerRolled2=false;

function result(randomNumber1,randomNumber2){
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 has won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 has won";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Oops its a draw";
}
}