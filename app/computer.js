const exp = module.exports = {};

var moves = ['rock','paper','scissors']

exp.selectOne = ()=>{
    var move = moves[Math.floor(Math.random()*moves.length)];
    return move;

}