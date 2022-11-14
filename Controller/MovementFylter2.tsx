import GenerateMoves from "./GenerateMoves";
import MovementAction from "./MovementAction";
import MovementType from "./MovementType";
import relativeStrengthCalculation from "./IA/relativeStrengthCalculation"
import moveBasedRelativeStrength from "./IA/moveBasedRelativeStrength";

export default function MovementFylter2(piece, board ){
let movement = MovementType(piece,board)
let newMovements = []

movement.filter((value)=>{
    if(MovementAction(value, board)!==false){
        newMovements.push(value) 
    }
})

let filter1 = newMovements.filter((value)=>{
    if(value.x>=0 && value.x<=7 && value.y>=0 && value.y<=7){
        return value
    }
})
let enemyColor = piece.color==="w"?"b":"w";
let strength = relativeStrengthCalculation(board)
let finalMovement = []
for(let i =0; i<filter1.length; i++){
let newBoard = MovementAction(filter1[i],board)
let enemyAttack = moveBasedRelativeStrength(enemyColor, newBoard)
let strength2 = relativeStrengthCalculation(enemyAttack)

if(piece.color==="b"){
    if(strength2<=strength){
        finalMovement.push(filter1[i])
    }
}
else{
    if(strength2>=strength){
        finalMovement.push(filter1[i])
    } 
}

}
if(finalMovement.length>0){
    return finalMovement
}
else{
    return false
}
}