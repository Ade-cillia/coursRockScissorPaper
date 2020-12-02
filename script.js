let myColor;  //Change Background Color
let playArray = ['','rock', 'scissors', 'paper'];
let totalRound = 5;
let actualRound = 0;
let numberWin = 0;
let numberLost = 0;
let numberExAequo = 0;
let choiceBot;
let choicePlayer;
let gameStatus = 'Start';   //For algo
let roundStatus = 'Start';

function roundStart(){  //Choix du Bot + Vérif résultat
        console.log(actualRound)
        choiceBot = Math.floor(Math.random()* Math.floor(3))+1
        choiceBot = playArray[choiceBot];
        console.log(choiceBot)


        if (choiceBot==choicePlayer){
            roundStatus = 'ex-aequo,';
            numberExAequo+=1
        } else if ((choicePlayer == 'rock' && choiceBot == 'scissors') || (choicePlayer == 'scissors' && choiceBot == 'paper') || (choicePlayer == 'paper' && choiceBot == 'rock') ){
            roundStatus = 'Win';
            numberWin += 1;
            actualRound +=1;
        } else{
            roundStatus = 'Lost';
            numberLost += 1;
            actualRound +=1;
        }
        console.log(roundStatus)
        showBotImage();
        nextRound();
};

function showBotImage() { //ajoute une image du choix du bot (celui si on a perdu ou gagner le point)

    let result = document.querySelector('.result');
    let imageResult = document.createElement('IMG');
    imageResult.setAttribute("class", 'resultClass');

    if (choiceBot=='rock'){
        if (roundStatus=='Win'){
            imageResult.setAttribute("src", 'image/rockWin.png');
        } else if (roundStatus=='Lost') {
            imageResult.setAttribute("src", 'image/rockLost.png');
        } else {
            imageResult.setAttribute("src", 'image/rock.png');
        }
    } else if (choiceBot=='scissors') {
        if (roundStatus=='Win'){
            imageResult.setAttribute("src", 'image/scissorsWin.png');
        } else if (roundStatus=='Lost') {
            imageResult.setAttribute("src", 'image/scissorsLost.png');
        } else {
            imageResult.setAttribute("src", 'image/scissors.png');
        }
    } else {
        if (roundStatus=='Win'){
            imageResult.setAttribute("src", 'image/paperWin.png');
        } else if (roundStatus=='Lost') {
            imageResult.setAttribute("src", 'image/paperLost.png');
        } else {
            imageResult.setAttribute("src", 'image/paper.png');
        }
    }
    result.prepend(imageResult);
};

function nextRound(){  //Teste la fin de la partie
    if (actualRound >= totalRound) {
        gameStatus = 'End'
    }
    if (numberWin >= totalRound/2){
        gameStatus ='Win'
        document.querySelector('.RusltText').innerHTML = "BRAVO ! Vous avez Gagné la majorité absolue des rounds"
    }
    else if (numberLost >= totalRound/2) {
            gameStatus ='Lost'
            document.querySelector('.RusltText').innerHTML = "PERDU ! Votre Ennemie à gagné la majorité absolue des rounds"
    }


    document.querySelector('#showActualRound').innerHTML = actualRound  // On Actualise les scores
    document.querySelector('#showNumberWin').innerHTML = numberWin
    document.querySelector('#showNumberLost').innerHTML = numberLost
    document.querySelector('#showNumberExAequo').innerHTML = numberExAequo
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
    let resultClass = document.querySelector('.resultClass').value;
    //document.querySelector('.imageClass').style.width = sizeImage + "%";

    for (let i = 0 ; (true);i++){
        document.querySelectorAll('.resultClass')[i].style.width = (sizeImage/6.5)  + "%";
    }
    console.log(`${sizeImage}%`);
});



// Initialisation des scores
document.querySelector('#showActualRound').innerHTML = actualRound
document.querySelector('#showTotalRound').innerHTML = totalRound
document.querySelector('#showNumberWin').innerHTML = numberWin
document.querySelector('#showNumberLost').innerHTML = numberWin
document.querySelector('#showNumberExAequo').innerHTML = numberWin

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
