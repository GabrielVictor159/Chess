import CheckMatte from "../CheckMatte"
import GenerateMoves from "../GenerateMoves"
import MovementAction from "../MovementAction"
import moveBasedRelativeStrength from "./moveBasedRelativeStrength"
import relativeStrengthCalculation from "./relativeStrengthCalculation"


export default function miniMax(color,enemyColor,board){
    let CheckMate = CheckMatte(color,board) 
    let generateMoves = GenerateMoves(color, board)
    let newBoard = MovementAction(generateMoves[Math.floor(Math.random() * generateMoves.length)],board);
    let initialStrength = relativeStrengthCalculation(board)
    let strength=0
    strength = relativeStrengthCalculation(board)

    if(CheckMate!=true){
       
        for(let i=0; i<generateMoves.length; i++){

          let  testBoard = MovementAction(generateMoves[i],board)
        let enemyMovesMax = GenerateMoves(enemyColor,testBoard)
        for(let z=0; z<enemyMovesMax.length; z++){
            let boardMax = MovementAction(enemyMovesMax[z], testBoard)
            let strength2 = relativeStrengthCalculation(boardMax)
            if(strength2<initialStrength){

            let aliadMoves = GenerateMoves(color, boardMax)
            for(let t=0; t<aliadMoves.length; t++){
                let boardMin = MovementAction(aliadMoves[t], boardMax)
                let finalStrength = relativeStrengthCalculation(boardMin)
                if(finalStrength<strength){
                    strength = finalStrength;
                    newBoard = testBoard
                }
            }
        }
        }
        }
      
      
    return newBoard;
}
else{
    return false;
}
}