const exp = module.exports = {};
const player = require('./player');
const computer = require('./computer');

exp.moves = [];
var results = {};
var total_round = 3;
exp.players = [player, computer]





exp.StartGame = async () => {
    for (var round = 1; round <= total_round; round++) {
        result = await gameRound(round);
        results[round] = result;
    };

    //console.log(results)
    var finalResult = await exp.calculateResult(results);
    console.log(finalResult);

    var play_again = await player.getAnswerFromUser("playAgain")
    if(play_again == true){
        exp.StartGame();
    }
    if(play_again == false){
        process.exit();
    }   


}




exp.Move = (player, move) => {
    console.log(player + ' moved ' + move);
    exp.moves.push({
        player: move
    })
}

async function gameRound() {
    var player_move = await player.getAnswerFromUser("game")
    exp.Move('player', player_move)
    var computer_move = computer.selectOne();
    exp.Move('computer', computer_move)
    var result = exp.Compare(player_move, computer_move)
    return result

}





exp.calculateResult = function (results)  {
    playerCount = 0;
    computerCount = 0;
    for (var round in results) {
    
        if (results[round] == "player") {
            playerCount++;
        }
        if (results[round] == "computer") {
            computerCount++;
        } else {
            //tie
        }

    }

    if (playerCount > computerCount) {
        return "You Won!!"
    }
    if (computerCount > playerCount) {
        return "You Lost!!"
    }
    if (computerCount == playerCount) {
        return "Game is Tie!!";
    }




}


exp.Compare = function (move1, move2) {
    if (move1 == move2) {
        return "tie"

    }
    if (move1 == "rock") {
        if (move2 == "paper") {
            return "computer"
        }
        if (move2 == "scissors") {
            return "player"
        }

    }
    if (move1 == "paper") {
        if (move2 == "scissors") {
            return "computer"
        }
        if (move2 == "rock") {
            return "player"
        }

    }
    if (move1 == "scissors") {
        if (move2 == "rock") {
            return "computer"
        }
        if (move2 == "paper") {
            return "player"
        }

    }



}