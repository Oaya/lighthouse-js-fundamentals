//create chess board//
const createBoard = () => {
  //create 8 of nested array//
  const chessBoard = [];
  for (let x = 0; 8 > x; x++) {
    chessBoard.push([]);
    for (let y = 0; 8 > y; y++) {
      chessBoard[x].push(0);
    }
  }
  return chessBoard;
};

//Generate chess board//
const generateBoard = (
  [whiteQueenRow, whiteQueenCol],
  [blackQueenRow, blackQueenCol]
) => {
  const chessBoard = createBoard();
  //place the queen //
  chessBoard[whiteQueenRow][whiteQueenCol] = 1;
  chessBoard[blackQueenRow][blackQueenCol] = 1;

  return chessBoard;
};

const queenThreat = (generatedBoard) => {
  //match as horizontal or vartical//
  let sumWhite = whiteQueen[0] + whiteQueen[1];
  let sumBlack = blackQueen[0] + blackQueen[1];
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
    //check the diagonal line//
    //look the right goes up  line/
  } else if (sumWhite === sumBlack) {
    return true;
    //look the right goes down  line/
  }
  if (
    isTopLeft([whiteQueen[0], whiteQueen[1]], generatedBoard) ||
    isBottomRight([whiteQueen[0], whiteQueen[1]], generatedBoard)
  ) {
    return true;
  } else {
    return false;
  }
};

const isTopLeft = ([startingQueenRow, startingQueenCol], chessBoard) => {
  // given a startingQueen, is there a queen in the top left?
  let rowToCheck = startingQueenRow - 1;
  let columnToCheck = startingQueenCol - 1;

  while (true) {
    // is it outside of the board?
    if (typeof chessBoard[rowToCheck] == "undefined") {
      return false;
    }
    // is there a queen?
    if (chessBoard[rowToCheck][columnToCheck] === 1) {
      return true;
    } else {
      rowToCheck = rowToCheck - 1;
      columnToCheck = columnToCheck - 1;
    }
  }
};

const isBottomRight = ([startingQueenRow, startingQueenCol], chessBoard) => {
  rowToCheck = startingQueenRow + 1;
  columnToCheck = startingQueenCol + 1;

  while (true) {
    if (typeof chessBoard[rowToCheck] == "undefined") {
      return false;
    }
    if (chessBoard[rowToCheck][columnToCheck] === 1) {
      return true;
    } else {
      rowToCheck = rowToCheck + 1;
      columnToCheck = columnToCheck + 1;
    }
  }
};

// const isTopLeftRecursive = ([row, col], chessBoard) => {
//   if (typeof chessBoard[row - 1] === undefined) {
//     return false;
//   }
//   // we know that we are still inside the board
//   if (chessBoard[row - 1][col - 1] === 1) {
//     return true;
//   }
//   return isTopLeftRecursive([row - 1, col - 1], chessBoard);
// };
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
