var compare = require('../app/game').Compare;
var calcuateResult = require('../app/game').calculateResult;
var expect = require('chai').expect;

describe('#Compare() function takes two string first one is player move second one is computer move', function () {
    context('player won round', function () {
        it('should return player', function () {
            expect(compare("rock", "scissors")).to.equal("player")
        })
        it('should return player', function () {
            expect(compare("paper", "rock")).to.equal("player")
        })
        it('should return player', function () {
            expect(compare("scissors", "paper")).to.equal("player")
        })
    })

    context('computer won round', function () {
        it('should return computer', function () {
            expect(compare("scissors", "rock")).to.equal("computer")
        })
        it('should return computer', function () {
            expect(compare("rock", "paper")).to.equal("computer")
        })
        it('should return computer', function () {
            expect(compare("paper", "scissors")).to.equal("computer")
        })
    })

    context('tie round', function () {
        it('should return tie', function () {
            expect(compare("scissors", "scissors")).to.equal("tie")
        })
        it('should return tie', function () {
            expect(compare("rock", "rock")).to.equal("tie")
        })
        it('should return tie', function () {
            expect(compare("paper", "paper")).to.equal("tie")
        })
    })
});

describe('#calculateResult() function takes and array and counts each element and return biggest element. If all of the elements in array are tie returns game is tie', function () {
    context('player won the game', function () {
        it('player won all three rounds', function () {
            expect(calcuateResult(["player", "player", "player"])).to.equal("You Won!!");
        })
        it('player won two rounds computer won one round', function () {
            expect(calcuateResult(["player", "player", "computer"])).to.equal("You Won!!");
            expect(calcuateResult(["player", "computer", "player"])).to.equal("You Won!!");
            expect(calcuateResult(["computer", "player", "player"])).to.equal("You Won!!");

        })
        it('player won two rounds and one tie', function () {
            expect(calcuateResult(["player", "player", "tie"])).to.equal("You Won!!");
            expect(calcuateResult(["player", "tie", "player"])).to.equal("You Won!!");
            expect(calcuateResult(["tie", "player", "player"])).to.equal("You Won!!");

        })
        it('player won one rounds and two tie', function () {
            expect(calcuateResult(["player", "tie", "tie"])).to.equal("You Won!!");
            expect(calcuateResult(["tie", "player", "tie"])).to.equal("You Won!!");
            expect(calcuateResult(["tie", "tie", "player"])).to.equal("You Won!!");

        })
    });
    context('computer won the game', function () {
        it('computer won all three rounds', function () {
            expect(calcuateResult(["computer", "computer", "computer"])).to.equal("You Lost!!");
        })
        it('computer won two rounds player won one round', function () {
            expect(calcuateResult(["player", "computer", "computer"])).to.equal("You Lost!!");
            expect(calcuateResult(["computer", "player", "computer"])).to.equal("You Lost!!");
            expect(calcuateResult(["computer", "computer", "player"])).to.equal("You Lost!!");


        })
        it('computer won two rounds and one tie', function () {
            expect(calcuateResult(["computer", "computer", "tie"])).to.equal("You Lost!!");
            expect(calcuateResult(["computer", "tie", "computer"])).to.equal("You Lost!!");
            expect(calcuateResult(["tie", "computer", "computer"])).to.equal("You Lost!!");

        })
        it('computer won one rounds and two tie', function () {
            expect(calcuateResult(["computer", "tie", "tie"])).to.equal("You Lost!!");
            expect(calcuateResult(["tie", "computer", "tie"])).to.equal("You Lost!!");
            expect(calcuateResult(["tie", "tie", "computer"])).to.equal("You Lost!!");

        })

    })
    context('all three rounds are tie', function () {


        it('all three rounds are tie', function () {
            expect(calcuateResult(["tie", "tie", "tie"])).to.equal("Game is Tie!!");
        })
    });
});




