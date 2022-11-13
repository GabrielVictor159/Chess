import CheckMatte from "../CheckMatte";
import GenerateMoves from "../GenerateMoves";
import MovementAction from "../MovementAction";


export default function randomMove(color,board){
   
    let CheckMate = CheckMatte(color,board) 
    if(CheckMate!=true){
        let mapMoves = GenerateMoves(color, board)
        console.log(mapMoves)
    let newBoard = MovementAction(mapMoves[Math.floor(Math.random() * mapMoves.length)],board)
    return newBoard;
}
else{
    return false;
}
    }
   