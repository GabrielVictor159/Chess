import CheckMatte from "../CheckMatte"
import GenerateMoves from "../GenerateMoves"
import MovementAction from "../MovementAction"
import moveBasedRelativeStrength from "./moveBasedRelativeStrength"
import relativeStrengthCalculation from "./relativeStrengthCalculation"
import segureMovement from "./segureMovement"


export default function miniMax(color,enemyColor,board){
    let CheckMate = CheckMatte(color,board) 
    let generateMoves = GenerateMoves(color, board)
    let segureAleatoryMoves = []
    let aleatoryMoviment;
    for(let i=0; i<generateMoves.length; i++){
        if(segureMovement(generateMoves[i],'w',board)){
            if(generateMoves[i].piece!="King"){
            segureAleatoryMoves.push(generateMoves[i])
           
            }
        }
    }
    if(segureAleatoryMoves.length>0){
         console.log('movimento seguro')
      aleatoryMoviment = segureAleatoryMoves[Math.floor(Math.random() * segureAleatoryMoves.length)]
    }
    else{
     aleatoryMoviment = generateMoves[Math.floor(Math.random() * generateMoves.length)]
     console.log('movimento aleatorio')
    }
    let newBoard = MovementAction(aleatoryMoviment,board);
    console.log(aleatoryMoviment)
    let initialStrength = relativeStrengthCalculation(newBoard)
   

    if(CheckMate!=true){
       
        let mapMoves = GenerateMoves(color, board)
         let z = relativeStrengthCalculation(newBoard)
        for(let i=0; i<mapMoves.length; i++){
            let mapBoard = MovementAction(mapMoves[i],board)
            let enemyAttack = moveBasedRelativeStrength('w',mapBoard)
            let newsMovement = GenerateMoves(color, enemyAttack)
            for(let t=0; t<newsMovement.length; t++){
            let finalMovement = MovementAction(newsMovement[t],board)
            let relativeStrength = relativeStrengthCalculation(finalMovement)

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
        }
         
     return newBoard;
}
else{
    return false;
}
}