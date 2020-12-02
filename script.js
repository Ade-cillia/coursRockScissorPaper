let myColor;  //Change Background Color
let playArray = ['','rock', 'scissors', 'paper'];
let totalRound = 5;
let actualRound = 0;
let numberWin = 0;
let choiceBot;
let choicePlayer;
let gameStatus = 'Start';   //For algo
let roundStatus = 'Start';

function roundStart(){
        console.log(actualRound)
        choiceBot = Math.floor(Math.random()* Math.floor(3))+1
        choiceBot = playArray[choiceBot];
        console.log(choiceBot)


        if (choiceBot==choicePlayer){
            roundStatus = 'ex-aequo,';
        }
        else if ((choicePlayer == 'rock' && choiceBot == 'scissors') || (choicePlayer == 'scissors' && choiceBot == 'paper') || (choicePlayer == 'paper' && choiceBot == 'rock') ){
            roundStatus = 'Win';
            numberWin += 1
        }
        else{
            roundStatus = 'Lost';
        }
        console.log(roundStatus)
        showBotImage();
        nextRound();
};

function showBotImage() {

    let result = document.querySelector('.result');
    let imageResult = document.createElement('IMG');
    if (choiceBot=='rock'){
        if (roundStatus=='Win'){
            imageResult.setAttribute("src", 'image/rockWin.png');
        }
        else if (roundStatus=='Lost') {
            imageResult.setAttribute("src", 'image/rockLost.png');
        }
        else {
            imageResult.setAttribute("src", 'image/rock.png');
        }
    }
    else if (choiceBot=='scissors') {
        if (roundStatus=='Win'){
            imageResult.setAttribute("src", 'image/scissorsWin.png');
        }
        else if (roundStatus=='Lost') {
            imageResult.setAttribute("src", 'image/scissorsLost.png');
        }
        else {
            imageResult.setAttribute("src", 'image/scissors.png');
        }
    }
    else {
        if (roundStatus=='Win'){
            imageResult.setAttribute("src", 'image/paperWin.png');
        }
        else if (roundStatus=='Lost') {
            imageResult.setAttribute("src", 'image/paperLost.png');
        }
        else {
            imageResult.setAttribute("src", 'image/paper.png');
        }
    }
    result.prepend(imageResult);

};

function nextRound(){
    if (actualRound >= totalRound) {
        gameStatus = 'End'

    }
    actualRound +=1;
    document.querySelector('#showActualRound').innerHTML = actualRound  // On Actualise les scores
    document.querySelector('#showNumberWin').innerHTML = numberWin

};



document.getElementById('colorButton').addEventListener('input', () => {
    let myColor = document.getElementById('colorButton').value;
    //console.log(myColor)
    let main = document.getElementById('main');
    main.style.backgroundColor = myColor;
});
document.getElementById("opacityButton").addEventListener('input', () => {
    let opacity = document.getElementById("opacityButton").value;
    console.log(opacity);
    let main = document.getElementById('main');
    let rgbColor = main.style.backgroundColor;
    let regExpRange = /[0-9]+/g;
    let colorMatch = rgbColor.match(regExpRange);
    //console.log(rgbColor);
    //console.log(opacityRange);
    console.log(colorMatch);
    main.style.backgroundColor = `rgba(${colorMatch[0]}, ${colorMatch[1]}, ${colorMatch[2]}, ${opacity})`;

});
document.getElementById('sizeButton').addEventListener('input', () => {
    let sizeImage = document.getElementById('sizeButton').value;
    document.querySelector('.imageClass').style.width = sizeImage  + "%";
    console.log(`${sizeImage}%`);
});




document.querySelector('#showActualRound').innerHTML = actualRound
document.querySelector('#showTotalRound').innerHTML = totalRound
document.querySelector('#showNumberWin').innerHTML = numberWin


document.querySelector('.rock').addEventListener('click', () => {
    choicePlayer = 'rock'
    if (gameStatus == 'Start'){
        roundStart();
    }

});
document.querySelector('.scissors').addEventListener('click', () => {
    choicePlayer = 'scissors'
    if (gameStatus == 'Start'){
        roundStart();
    }
});
document.querySelector('.paper').addEventListener('click', () => {
    choicePlayer = 'paper'
    if (gameStatus == 'Start'){
        roundStart();
    }
});
