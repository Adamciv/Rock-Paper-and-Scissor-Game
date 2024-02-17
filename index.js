const getUserChoice = userInput =>{ 
    userInput = userInput.toLowerCase();
  
  
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
      return userInput;
    } else{
      console.log("Error: please write one of these: 'rock', 'paper', 'scissors'");
    }
  }
  
  
  
  // get the computer choice
  const getComputerChoice = () => {
    let randNo = Math.floor(Math.random()*3);
    if(randNo===0){
      return 'rock';
    } else if(randNo===1){
      return 'paper';
    } else{ return 'scissors';}
  }
  
  
  const determineWinner = (userChoice,computerChoice) => {
    if(userChoice===computerChoice){
      return 'Repat the game'; }
  
   
  
    if(userChoice==='rock'){
      if(computerChoice==='paper'){
        return 'computer won';
      } else {return 'user won';}
    }
  
    if(userChoice==='paper'){
      if(computerChoice==='rock'){
        return 'user won';
      } else {return 'computer won'}
    }
  
    if(userChoice==='scissors'){
      if(computerChoice==='paper'){
        return 'user won';
      } else {return 'computer won'}
    }
  };
  
  const playGame = () =>{
    let userChoice=getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`user chose: ${userChoice}`);
    console.log(`computer chose: ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice))
  
  };
  
  playGame()
  
  
  
  
  
  