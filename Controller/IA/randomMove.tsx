import CheckMatte from "../CheckMatte";
import GenerateMoves from "../GenerateMoves";
import MovementAction from "../MovementAction";
import relativeStrengthCalculation from "./relativeStrengthCalculation";


export default function randomMove(color,board){
    let CheckMate = CheckMatte(color,board) 
    if(CheckMate!=true){
        let mapMoves = GenerateMoves(color, board)
    let newBoard = MovementAction(mapMoves[Math.floor(Math.random() * mapMoves.length)],board)
    return newBoard;
}
else{
    return false;
}
    }
   