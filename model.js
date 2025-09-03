let app = document.getElementById("app");

let picture = `<img src="Bilder/bunny.png" alt="picture of pet" width="60px">`;
let intro = `<div><b>your tamagochi:</b></div>
    <div id="nameIntro"><input onchange = "namePet(this.value)" placeholder="Enter name"></div>`;
let leaveOwnerhtml = `<button onclick="reloadPage()">get a new pet!</button>`;
let petName = `pet name`;
let hunger = 100;
let hygiene = 100;
let mood = 100;
let totalStats = hunger + hygiene + mood;

let timeAlive = 0;
let age = "baby";
let gameIsActive = false;
let message = `everything is good`;


// progress bars: 
const hungerBar = document.getElementById("hungerBar");
const hygieneBar = document.getElementById("hygieneBar");
const boredomBar = document.getElementById("boredomBar");

