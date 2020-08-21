let rockUrl = 'images/rock.jpg';
let paperUrl = 'images/paper.jpg';
let scissorUrl = 'images/scissors.jpg';

document.addEventListener('DOMContentLoaded', function() {
    let rockImage = new Image();
    let paperImage = new Image();
    let scissorsImage = new Image();

    rockImage.src = rockUrl;
    paperImage.src = paperUrl;
    scissorsImage.src = scissorUrl;

    document.getElementById('rock').appendChild(rockImage);
    document.getElementById('paper').appendChild(paperImage);
    document.getElementById('scissors').appendChild(scissorsImage);
});

//generate random value for computer
const getComputerPick = () => {
    const choices = ['rock', 'paper','scissors'];
    let pick = choices[Math.floor(Math.random() * choices.length)];
    return pick;
}

//get winner of game
const getWinner = (computerPick, userPick) => {
    if(userPick ==='rock' && computerPick === 'rock') {
        return 'This game is a tie';
    } else if (userPick ==='rock' && computerPick === 'paper') {
        return 'sorry! paper beats rock!';
    } else if(userPick ==='rock' && computerPick === 'scissors') {
        return 'winner! rock beats scissors!';
    }

    if(userPick ==='paper' && computerPick === 'paper') {
        return 'This game is a tie';
    } else if (userPick ==='paper' && computerPick === 'rock') {
        return 'winner! paper beats rock!';
    } else if(userPick ==='paper' && computerPick === 'scissors') {
        return 'sorry! scissors beats paper!';
    }

    if(userPick ==='scissors' && computerPick === 'scissors') {
        return 'This game is a tie';
    } else if (userPick ==='scissors' && computerPick === 'paper') {
        return 'winner! scissors beat paper!';
    } else if(userPick ==='scissors' && computerPick === 'rock') {
        return 'sorry! rock beats scissors!';
    }
}

const chooseRock = () => {
    let computerPick = getComputerPick();
    getWinner(computerPick, 'rock');

    let rockComputerUrl = `images/${computerPick}.jpg`;

    let rockUserImage = new Image();
    let rockComputerImage = new Image();

    rockUserImage.src = rockUrl;
    rockComputerImage.src = rockComputerUrl;

    document.getElementById('user-pick').appendChild(rockUserImage);
    document.getElementById('computer-pick').appendChild(rockComputerImage);
}

const choosePaper = () => {
    let computerPick = getComputerPick();
    getWinner(computerPick, 'paper');
}

const chooseScissors = () => {
    let computerPick = getComputerPick();
    getWinner(computerPick, 'scissors');
}

//Lister for users pick via click
document.getElementById('rock').addEventListener('click', chooseRock);
document.getElementById('paper').addEventListener('click', choosePaper);
document.getElementById('scissors').addEventListener('click', chooseScissors);