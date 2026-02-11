const wordArray = [
    "model", "graph", "method", "framework", "bias", 
    "chart", "trend", "vacuole", "plant", "phylum", 
    "reptile", "virus", "genus", "family", "domain",
    "xylem", "muscle", "pathogen", "vein",  "gland"
];

function generateRandomIndex() {
    let randomIndex = Math.floor(Math.random()*wordArray.length); //Add code to generate random index
    return randomIndex; //index gets returned
}

function storeLetters() {
    let length = wordArray[randomIndex].length;
    let lettersArray = [];
    
    for(i = 0; i < 25; i++) {
        lettersArray[i] = wordArray.charAt(i);
    }
    /*
    After generate randomIndex
    get word that corresponds to randomIndex
    make new array (store indiv letters)
    make for loop to count characters/letters in word (make use of return then break in loop)
    */
}

function makeBlanks() 
    /*
    Just run array in store letters (could be mixed in as one function but idk
    for now we are just brain storming)

    Thinking of this being a for loop and it output blanks
    */
}

function keyBoardLetter(letterClicked) {
    let output = letterClicked;
    document.getElementById("text").innerText += output;
}

function onBackSpacePress() {
    let currentString = document.getElementById("text").innerText;
    let finalString = currentString.substring(0, currentString.length - 1);
    document.getElementById("text").innerText = finalString;
}

function space() {
    let space1st = document.getElementById("text").innerText;
    let extraSpace = space1st.substring(0, space1st.length + 1);
    document.getElementById("text").innerText = extraSpace;
}

function checkLetter() {
    /*sir kyle said there was function to find letter lowkey so we just use that
    if letter is wrong minus lives*/
}

function hangmanGraphics(playerLives) {
    if () {

    } else if () {

    } else {

    }
}

function playHangman() {
    let playerLives = 3;

}
