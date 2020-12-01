let myColor;
let playArray = ['','rock', 'scissors', 'paper'];
let totalRound = 5;
let actualRound = 1;
let choiceBot;
let choicePlayer;
let gameStatus = 'Start';
let roundStatus = 'Start';
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
        }
        else{
            roundStatus = 'Lost';
        }
        console.log(roundStatus)
        nextRound();
};

function nextRound(){

    actualRound +=1;

};
document.querySelector('#')
document.querySelector('.rock').addEventListener('click', () => {
    choicePlayer = 'rock'
    roundStart();
});
document.querySelector('.scissors').addEventListener('click', () => {
    choicePlayer = 'scissors'
    roundStart();
});
document.querySelector('.paper').addEventListener('click', () => {
    choicePlayer = 'paper'
    roundStart();
});
