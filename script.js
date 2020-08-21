let rockUrl = 'images/rock.jpg';
let paperUrl = 'images/paper.jpg';
let scissorsUrl = 'images/scissors.jpg';

document.addEventListener('DOMContentLoaded', function() {
    let rockImage = new Image();
    let paperImage = new Image();
    let scissorsImage = new Image();

    rockImage.src = rockUrl;
    paperImage.src = paperUrl;
    scissorsImage.src = scissorsUrl;

    document.getElementById('rock').appendChild(rockImage);
    document.getElementById('paper').appendChild(paperImage);
    document.getElementById('scissors').appendChild(scissorsImage);
    document.getElementById('computer-pick-img').style.visibility ='hidden'
    document.getElementById('user-pick-img').style.visibility ='hidden'
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
    let winner = getWinner(computerPick, 'rock');

    document.getElementById('computer-pick-img').style.visibility ='visible'
    document.getElementById('user-pick-img').style.visibility ='visible'

    document.getElementById('user-pick-img').src = rockUrl;
    document.getElementById('computer-pick-img').src = `images/${computerPick}.jpg`;
    document.getElementsByClassName('results')[0].innerText  = `${winner}`;
}

const choosePaper = () => {
    let computerPick = getComputerPick();
    let winner = getWinner(computerPick, 'paper');

    document.getElementById('computer-pick-img').style.visibility ='visible'
    document.getElementById('user-pick-img').style.visibility ='visible'

    document.getElementById('user-pick-img').src = paperUrl;
    document.getElementById('computer-pick-img').src = `images/${computerPick}.jpg`;
    document.getElementsByClassName('results')[0].innerText  = `${winner}`;
}

const chooseScissors = () => {
    let computerPick = getComputerPick();
    let winner = getWinner(computerPick, 'scissors');

    document.getElementById('computer-pick-img').style.visibility ='visible'
    document.getElementById('user-pick-img').style.visibility ='visible'

    document.getElementById('user-pick-img').src = scissorsUrl;
    document.getElementById('computer-pick-img').src = `images/${computerPick}.jpg`;
    document.getElementsByClassName('results')[0].innerText  = `${winner}`;
}

//Lister for users pick via click
document.getElementById('rock').addEventListener('click', chooseRock);
document.getElementById('paper').addEventListener('click', choosePaper);
document.getElementById('scissors').addEventListener('click', chooseScissors);