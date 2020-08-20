function computerPlay(){
    // For nice & easy integer values
    let random = Math.ceil(Math.random()*3)
    // console.log(random)
    
    if(random === 1) return 'rock'
    if(random === 2) return 'paper'
    if(random === 3) return 'scissors'
}

// console.log(computerPlay())

function playRound(playerChoice, computerChoice) {
    let winner
    playerChoice = playerChoice.toLowerCase()
  
    //check for tie
    if(playerChoice === computerChoice){
      // Pit two computers against each other... or try your luck against the machine!
      // IN OTHER WORDS  ===  only uncomment 1 of the 2 lines below
      playerChoice = computerPlay()
      // playerChoice = prompt('Tie, pick again! Rock, paper or scissors?')
      let newComputerChoice = computerPlay()
      playRound(playerChoice, newComputerChoice)
    }
  
    //check for rock
    if(playerChoice === 'rock') {
//       if(computerChoice === 'paper') computerPoints++
//       else playerPoints++
      if(computerChoice === 'paper') winner = 'computer'
      else winner = 'player'
    }
  
    //check for paper
    if(playerChoice === 'paper') {
      if(computerChoice === 'scissors') winner = 'computer'
      else winner = 'player'
    } 
  
    //check for scissors
    if(playerChoice === 'scissors') {
      if(computerChoice === 'rock') winner = 'computer'
      else winner = 'player'
    }
  
    // console.log(winner)
    if (winner === 'computer') return [winner, `You lose! ${computerChoice} beats ${playerChoice}!`]
    else return [winner, `You win! ${playerChoice} beats ${computerChoice}!`]
  
}

// *****    TESTING the 1st TWO functions    before move to the final GAME stage *****
let playerSelect = 'rock'
let computerSelect = computerPlay() 
console.log(playRound(playerSelect, computerSelect))