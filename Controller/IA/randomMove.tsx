import GenerateMoves from "../GenerateMoves";
import MovementAction from "../MovementAction";


export default function randomMove(color,board){
    let mapMoves = GenerateMoves(color, board)
    let newBoard = MovementAction(mapMoves[Math.floor(Math.random() * mapMoves.length-1)],board)
    return newBoard;
}