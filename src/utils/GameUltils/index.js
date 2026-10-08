// const checkForSequence = (option1 , option2 , option3) =>{
//     return option1 === option2 && option2 === option3
// }

const winLines = [
  [0, 1, 2],[3, 4, 5],[6, 7, 8], //rows
  [0, 3, 6], [1, 4, 7],[2, 5, 8], //columns
  [0, 4, 8], [2, 4, 6], //diagonals
];

export const checkForWinner = (board) => {
  //diagonals
  // if(board[0] === board[4] && board[4]=== board[8]){
  //     return true
  // }
  //  if(board[2] === board[4] && board[4]=== board[6]){
  //     return true
  // }

  // colummn
  // for(let i = 0; i<9;i=i+1){
  //     if(checkForSequence(board[i], board[i+3] ,board[i+6])){
  //         return true;
  //     }
  // }

  //rows
  // for(let i; i<9;i=i+3){
  //     if(checkForSequence(board[i], board[i+1] ,board[i+2])){
  //         return true;
  //     }
  // }

  winLines.some(
      ([a, b, c]) =>
        board[a] !== "" && board[a] === board[b] && board[b] === board[c],
  );
};
