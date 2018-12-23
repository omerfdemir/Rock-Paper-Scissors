const readline = require('readline');
const game = require('./game');


const exp = module.exports = {};
var input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

exp.getAnswerFromUser = (inputType) => {
  return new Promise((resolve, reject) => {
 
     getUserInput = (inputType) =>{


      if(inputType == "game" ){


        input.question('Rock, Paper or Scissors? (You need to write one of the following: "rock", "paper" or "scissors") ', (answer) => {
          if (answer == "rock" || answer == "paper" || answer == "scissors" ) {
    
            resolve(answer)
    
          } else {
            console.log('Your answer is wrong! Please select one of the following:  "rock", "paper" or "scissors"' )
            getUserInput("game");
          }
    
    
        });



      }
      if(inputType == "playAgain"){
        input.question('Do you want to play again (Y/N)', (answer) => {
          if (answer == "y" || answer == "Y") {
            resolve(true)
    
          } 
          if (answer == "n" || answer == "N" ) {
    
            resolve(false)
    
          }
          else {
            console.log('Your answer is wrong! You need to write Y/N' )
            getUserInput("playAgain");
          }
        });
      }
          

  



  };
  
  getUserInput(inputType);
  
});

}