function computerPlay(){
    // For nice & easy integer values
    let random = Math.ceil(Math.random()*3)
    // console.log(random)
    
    if(random === 1) return 'rock'
    if(random === 2) return 'paper'
    if(random === 3) return 'scissors'
}

console.log(computerPlay())