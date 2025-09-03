
function feed(){
    hunger += 20;
    if(hunger > 100) hunger = 100;
    updateView()
}

function wash(){
    hygiene += 20;
    if(hygiene > 100) hygiene = 100;
    updateView()
}

function pet(){
    mood += 20;
    if(mood > 100) mood = 100;
    updateView()
}

function namePet(navn){
    petName = navn;
    intro = ''
    gameIsActive = true
    updateView()
}

function reloadPage(){
    // location.reload();
    // hunger = 100;
    // hygiene = 100;
    // mood = 100;
    // picture = `<img src="Bilder/bunny.png" alt="picture of pet" width="60px">`;
    // html += intro;
    window.location.href = window.location.href;
}



function danger(){
    if(hunger <= 2 || hygiene <= 2){
        document.getElementById("stats").style.backgroundColor = 'red'
    } else {
        document.getElementById("stats").style.backgroundColor = ''
    }
    
}

function bored(){
    if(mood == 0){
        message = 'Jeg kjeder meg'
    }
}


function leaveOwner() {
    gameIsActive = false;
    // document.getElementById("hungerBar").value = hunger;
    // document.getElementById("hygieneBar").value = hygiene;
    // document.getElementById("moodBar").value = mood;
    document.getElementById("petImage").innerHTML = `<div>your pet has left to find a better place</div>`
    document.getElementById("statsSection").innerHTML = leaveOwnerhtml;
}



function reduceStats() {
    if (gameIsActive === false) {
        return;
    }
    
    hunger -= Math.floor(Math.random() * 3) + 5
    if (hunger < 0) {
        hunger = 0
    }
    
    hygiene -= Math.floor(Math.random() * 3) + 5
    if (hygiene < 0) {
        hygiene = 0
    }

    mood -= Math.floor(Math.random() * 3) + 5
    if (mood < 0) {
        mood = 0
    }

    if (hunger + hygiene + mood <= 0) {
        leaveOwner()
        return;
    }


    ageUp()
    updateMessage()
};

// let bunnyDiv = document.getElementById("petImage");

function ageUp() {
    timeAlive += 1

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


const everyFiveSeconds = setInterval(reduceStats, 300);

// PROGRESS BARS : 

function updateMessage(){
    if (hunger <= 20) {
        message =`your pet is hungry!`;
    } else if (hygiene <= 20) {
        message =`your pet is grungy!`;
    } else if (mood <= 20) {
        message =`your pet is bored!`;
    } else {
        message= `everything is good`;
    }

    updateView();
}