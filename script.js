document.addEventListener('DOMContentLoaded', function() {
    let rockUrl = 'images/rock.jpg';
    let paperUrl = 'images/paper.jpg';
    let scissorUrl = 'images/scissors.jpg';

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