import GenerateMoves from "../GenerateMoves";
import MovementAction from "../MovementAction";

export default function seguraMovement(movement, enemyColor, board){
    let enemyMoves = GenerateMoves(enemyColor, board)
    let newBoard = MovementAction(movement,board)
    for(let i=0; i<enemyMoves.length; i++){
        let move = MovementAction(enemyMoves[i], newBoard)
        if(move!=false){
        let test = move.findIndex(value => 
            value.x===movement.x && value.y===movement.y && value.color===movement.piece.color && value.type === movement.piece.type
            )
        if(test===-1){
            return false
        }
    }
    }
return true
}