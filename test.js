// let turnCount;
// let playerAmount = 6;
// let array = ["player 1", "player 2", "player 3", "player 4", "player 5", "player 6"]
// let currentPlayer = array[0];
// console.log(currentPlayer);
// const rotatePlayersArray = (player) => {
//   //if there are 2 players
//   if (playerAmount == 2){
//     if (player == array[0] && turnCount == 0){
//       player = array[1];
//       turnCount = 1;
//       return player;
//     } else if (player == array[1] && turnCount == 1){
//       player = array[0];
//       turnCount = 0;
//       return player;
//     }
//   } else if (playerAmount == 3) {
//     if (player == array[0] && turnCount == 0){
//       player = array[1];
//       turnCount = 1;
//       return player;
//     } else if (player == array[1] && turnCount == 1) {
//       player = array[2];
//       turnCount = 2;
//       return player;
//     } else if (player == array[2] && turnCount == 2) {
//       player = array[0];
//       turnCount = 0;
//     }
//   } else if (playerAmount == 4) {
//     if (player == array[0] && turnCount == 0){
//       player = array[1];
//       turnCount = 1;
//       return player;
//     } else if (player == array[1] && turnCount == 1) {
//       player = array[2];
//       turnCount = 2;
//       return player;
//     } else if (player == array[2] && turnCount == 2) {
//       player = array[3];
//       turnCount = 3;
//       return player;
//     } else if (player == array[3] && turnCount == 3) {
//       player = array[0];
//       turnCount = 0;
//       return player;
//     }
//   } else if (playerAmount == 5) {
//     if (player == array[0] && turnCount == 0){
//       player = array[1];
//       turnCount = 1;
//       return player;
//     } else if (player == array[1] && turnCount == 1) {
//       player = array[2];
//       turnCount = 2;
//       return player;
//     } else if (player == array[2] && turnCount == 2) {
//       player = array[3];
//       turnCount = 3;
//       return player;
//     } else if (player == array[3] && turnCount == 3) {
//       player = array[4];
//       turnCount = 4;
//       return player;
//     } else if (player == array[4] && turnCount == 4) {
//       player = array[0];
//       turnCount = 0;
//       return player;
//     }
//   } else if (playerAmount == 6) {
//     console.log("this is working");
//     if (player == array[0] && turnCount == 0){
//       player = array[1];
//       turnCount = 1;
//       console.log(player);
//       return player;
//     } else if (player == array[1] && turnCount == 1) {
//       player = array[2];
//       turnCount = 2;
//       console.log(player);
//       return player;
//     } else if (player == array[2] && turnCount == 2) {
//       player = array[3];
//       turnCount = 3;
//       console.log(player);
//       return player;
//     } else if (player == array[3] && turnCount == 3) {
//       player = array[4];
//       turnCount = 4;
//       console.log(player);
//       return player;
//     } else if (player == array[4] && turnCount == 4) {
//       player = array[5];
//       turnCount = 5;
//       console.log(player);
//       return player;
//     } else if (player == array[5] && turnCount == 5) {
//       player = array[0];
//       turnCount = 0;
//       console.log(player);
//       return player;
//     }
//   }
// }
// let num = 10;
// while (num > 0) {
//   currentPlayer = rotatePlayersArray(currentPlayer);
//   console.log(currentPlayer);
//   num--;
// }
let currentPlayer;
let playersArray = [1, 2, 3, 4, 5, 6];
const rotatePlayersArray = (array) => {
  array.unshift(array.pop());
  return array;
}
const setCurrentPlayer = () => {
  //build logic to determine whose turn it is
  playersArray = rotatePlayersArray(playersArray);
  player = playersArray[0]
  return player;
}
currentPlayer = setCurrentPlayer();
console.log(currentPlayer);
currentPlayer = setCurrentPlayer();
console.log(currentPlayer);
currentPlayer = setCurrentPlayer();
console.log(currentPlayer);
currentPlayer = setCurrentPlayer();
console.log(currentPlayer);
currentPlayer = setCurrentPlayer();
console.log(currentPlayer);
currentPlayer = setCurrentPlayer();
console.log(currentPlayer);
