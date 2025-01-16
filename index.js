let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

if(localStorage.getItem('score'))
{
    score = JSON.parse(localStorage.getItem('score'));
}
    
updateScoreElementAndLocal();

function playGame(move){
    let computerMove = generateComputerMove();
    const result = document.querySelector('.result');
    const movesElement = document.querySelector('.movesElement');

    if(move === computerMove){
        result.innerHTML = 'It was a tie.'
        score.ties++;
    } else if(
        (move == 'rock' && computerMove == 'scissors') || 
        (move == 'paper' && computerMove == 'rock') || 
        (move == 'scissors' && computerMove == 'paper')){
            result.innerHTML = 'You won.';
            score.wins++;
        } else{
            result.innerHTML = 'You lost.';
            score.losses++;
    }

    updateScoreElementAndLocal()

    movesElement.innerHTML = `You <img src="src/${move}-move.png" class="move-image"> <div class="vLine"></div> <img src="src/${computerMove}-move.png" class="move-image"> Bot`;


}

function resetScore()
{
    const movesElement = document.querySelector('.movesElement');
    const result = document.querySelector('.result');
    score.wins = 0; score.losses = 0; score.ties = 0;
    movesElement.innerHTML = '';
    result.innerHTML = '';
    updateScoreElementAndLocal();
}

function updateScoreElementAndLocal()
{
    const winsElement = document.querySelector('.wins');
    winsElement.innerHTML = `Wins: ${score.wins}`;

    const lossesElement = document.querySelector('.losses');
    lossesElement.innerHTML = `Losses: ${score.losses}`;

    const tiesElement = document.querySelector('.ties');
    tiesElement.innerHTML = `Ties: ${score.ties}`;

    localStorage.setItem('score', JSON.stringify(score));
}

function generateComputerMove(){
    let number = Math.random();
    let move;

    if(number >= 0 && number < 1/3){
        move = 'rock';
    } else if(number >= 1/3 && number < 2/3){
        move = 'paper';
    } else if(number >= 2/3 && number < 1){
        move = 'scissors';
    } 
    return move;
}