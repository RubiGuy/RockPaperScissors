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

    movesElement.innerHTML = `You <img src="src/${move}-move.png" class="move-image"> | <img src="src/${computerMove}-move.png" class="move-image"> Computer`;


}

function resetScore()
{
    score.wins = 0; score.losses = 0; score.ties = 0;
    updateScoreElementAndLocal();
}

function updateScoreElementAndLocal()
{
    const scoreElement = document.querySelector('.score');
    scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
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