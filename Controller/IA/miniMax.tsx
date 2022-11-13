import CheckMatte from "../CheckMatte"
import GenerateMoves from "../GenerateMoves"
import MovementAction from "../MovementAction"
import moveBasedRelativeStrength from "./moveBasedRelativeStrength"
import relativeStrengthCalculation from "./relativeStrengthCalculation"


export default function miniMax(color,enemyColor,board){
    let CheckMate = CheckMatte(color,board) 
    let newBoard
    if(CheckMate!=true){
        let mapMoves = GenerateMoves(color, board)
        let newBoard = MovementAction(mapMoves[Math.floor(Math.random() * mapMoves.length)],board)
        let z = relativeStrengthCalculation(newBoard)
       for(let i=0; i<mapMoves.length; i++){
           let mapBoard = MovementAction(mapMoves[i],board)
           let enemyBoard = moveBasedRelativeStrength(enemyColor,mapBoard);
           let aliadBoard = moveBasedRelativeStrength(color,enemyBoard);
           let relativeStrength = relativeStrengthCalculation(aliadBoard)
           if(relativeStrength<z){
               z = relativeStrength
               newBoard = mapBoard
           }

       }
        
    return newBoard;
}
else{
    return false;
}
}