var leaderBoard= require('./leaderboard.js');

for(i=1; i<=10; i++){
leaderBoard.addPlayer((i%2)+'gid', 'sid'+i, 'clid'+i, 'name'+i, i, 'image'+i);
if(i>2){
console.log('game 0');
console.log(leaderBoard.getGamePlayers('0gid'));

console.log('game 1');
console.log(leaderBoard.getGamePlayers('1gid'));
}

}
