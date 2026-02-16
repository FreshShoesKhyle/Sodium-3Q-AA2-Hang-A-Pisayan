function generateRandomIndex() {

    const wordArray = [
    "model", "graph", "method", "framework", "bias", 
    "chart", "trend", "vacuole", "plant", "phylum", 
    "reptile", "virus", "genus", "family", "domain",
    "xylem", "muscle", "pathogen", "vein",  "gland"
    ];

    const randomIndex = Math.floor(Math.random()*wordArray.length);
    const randomWord = wordArray[randomIndex];
    const letters = randomWord.split("");
    const lettersArray = [letters]; 
    console.log(randomIndex);
    console.log(randomWord);
    console.log(letters);
}

function makeBlanks()  {
    let blank = "_";
    let wordLength = randomWord[randomIndex].length;
    for(i=0; i <= wordLength - 1 ;i++) {
        let output = blank
    }
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
    for (i=0; i<= wordLength; i++) {
        
    }
}

function hangmanGraphics(playerLives) {
}

function playHangman() {
    let playerLives = 3;

}
