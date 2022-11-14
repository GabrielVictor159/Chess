import CheckMatte from "../CheckMatte"
import GenerateMoves from "../GenerateMoves"
import MovementAction from "../MovementAction"
import relativeStrengthCalculation from "./relativeStrengthCalculation"


export default function moveBasedRelativeStrength(color, board){
    
     let CheckMate = CheckMatte(color,board) 
     let newBoard
     if(CheckMate!=true){
         let mapMoves = GenerateMoves(color, board)
         let newBoard = MovementAction(mapMoves[Math.floor(Math.random() * mapMoves.length)],board)
         let z = relativeStrengthCalculation(newBoard)
        for(let i=0; i<mapMoves.length; i++){
            let mapBoard = MovementAction(mapMoves[i],board)
            let relativeStrength = relativeStrengthCalculation(mapBoard)
            if(color==='b'){
            if(relativeStrength<z){
                z = relativeStrength
                newBoard = mapBoard
            }
        }
        else{
            if(relativeStrength>z){
                z = relativeStrength
                newBoard = mapBoard
            } 
        }
        }
         
     return newBoard;
 }
 else{
     return false;
 }
}