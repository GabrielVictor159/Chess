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
        return +50;
        break;
      } else {
        return -50;
        break;
      }
      case "Horse":
      if (piece.color === "w") {
        return +30;
        break;
      } else {
        return -30;
        break;
      }
      
      case "Bishop":
      if (piece.color === "w") {
        return +30;
        break;
      } else {
        return -30;
        break;
      }
      case "Queen":
        if (piece.color === "w") {
          return +90;
          break;
        } else {
          return -90;
          break;
        }
        case "King":
      if (piece.color === "w") {
        return +900;
        break;
      } else {
        return -900;
        break;
      } 
      
  }
}
