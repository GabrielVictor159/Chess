export default function relativeStrengthCalculation(board) {
    let relativeStrength:number=0;

    for(let i = 0; i< board.length; i++){
        relativeStrength = relativeStrength + pieceStrength(board[i])
    }
    return relativeStrength
}

function pieceStrength(piece) {
  switch (piece.type) {
    case "Pawn":
      if (piece.color === "w") {
        return +10;
        break;
      } else {
        return -10;
        break;
      }
     
    case "Tower":
      if (piece.color === "w") {
        return +150;
        break;
      } else {
        return -150;
        break;
      }
      case "Horse":
      if (piece.color === "w") {
        return +100;
        break;
      } else {
        return -100;
        break;
      }
      
      case "Bishop":
      if (piece.color === "w") {
        return +100;
        break;
      } else {
        return -100;
        break;
      }
      case "Queen":
        if (piece.color === "w") {
          return +2000;
          break;
        } else {
          return -2000;
          break;
        }
        case "King":
      if (piece.color === "w") {
        return +9000;
        break;
      } else {
        return -9000;
        break;
      } 
      
  }
}
