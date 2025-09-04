
function feed(){ //Feed your bunny - increase hunger value
    numberOfActions++;
    if (gameIsActive === false) {
        return;
    }
    hunger += 20;
    if(hunger > 100) hunger = 100;
    updateMessage();
}

function wash(){ //Wash your bunny - increase hygiene value
    numberOfActions++;
    if (gameIsActive === false) {
        return;
    }
    hygiene += 20;
    if(hygiene > 100) hygiene = 100;
    updateMessage();
}

function pet(){  //Pet your bunny - increase mood value
    numberOfActions++;
    if (gameIsActive === false) {
        return;
    }
    mood += 20;
    if(mood > 100) mood = 100;
    updateMessage();
}

function namePet(navn){ // Name bunny and start game
    petName = navn;
    intro = '';
    gameIsActive = true;
    updateView();
}

function reloadPage(){
    window.location.href = window.location.href; //Refreshes the page to all the original variables
}



function leaveOwner() {  // When hunger, mood and hungry is too low, the bunny leaves and game is over
    gameIsActive = false;
    // document.getElementById("hungerBar").value = hunger;
    // document.getElementById("hygieneBar").value = hygiene;
    // document.getElementById("moodBar").value = mood;
    document.getElementById("petImage").innerHTML = 
        `<div>your pet has left to find a better place :(
        <br>Time alive: ${timeAlive}
        <br>Actions made: ${numberOfActions}</div>`;
    document.getElementById("statsSection").innerHTML = leaveOwnerhtml;
}



function reduceStats() { //Reduces all stats as time passes
    if (gameIsActive === false) {
        return;
    }
    
    hunger -= Math.floor(Math.random() * 3) + 5
    if (hunger < 0) {
        hunger = 0;   //forces hunger to return to 0 if it goes int the negatives
    }
    
    hygiene -= Math.floor(Math.random() * 3) + 5
    if (hygiene < 0) {
        hygiene = 0;   //forces hygiene to return to 0 if it goes int the negatives
    }

    mood -= Math.floor(Math.random() * 3) + 5
    if (mood < 0) {
        mood = 0;   //forces mood to return to 0 if it goes int the negatives
    }

    if (hunger + hygiene + mood <= 0) { // checks if all stats have hit 0 and then activates leaveowner
        leaveOwner()
        return;
    }
    
    ageUp();
    updateMessage();
};



function ageUp() { // bunny ages up to adolescent and then adult 
    timeAlive += 1;

    if (timeAlive < 20) {
        age = "baby";
        picture = `<img src="Bilder/bunny.png" alt="picture of pet" width="60px">`;

    } else if (timeAlive >= 20 && timeAlive < 60) {
        age = "adolescent"
        picture = `<img src="Bilder/bunny2.png" alt="picture of pet" width="80px">`;

    } else {
        age = "adult"
        picture = `<img src="Bilder/bunny3.png" alt="picture of pet" width="140px">`;

    }
}


const everyFiveSeconds = setInterval(reduceStats, 2500); // activates the reduceStats function ^^^ every 2.5 secons

// PROGRESS BARS : 


function updateMessage(){ //updates messages
    message = ""
    if (hunger <= 20) {
        message += `your pet is hungry!<br>`;
    }

    if (hygiene <= 20) {
        message += `your pet is grungy!<br>`;
    }

    if (mood <= 20) {
        message += `your pet is bored!`;
    }

    if (hunger > 20 && hygiene > 20 && mood > 20) {
        message = `everything is good`;
    } 
    updateView();
}