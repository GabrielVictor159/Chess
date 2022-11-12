import Check from "./Check";
import Piece from "../Model/Piece";
export default function MovementAction(movement, board){
     let Cal: Piece[] =[]
     board.map((value,id)=>{
      Cal.push(value)
     })
    let variableElimination;
    let indexElimination = Cal.findIndex( value => value.x === movement.x && value.y === movement.y)
    if(indexElimination > -1){
      variableElimination = Cal[indexElimination]
      Cal.splice(indexElimination,1)
    }
  
   let indexPiece = Cal.findIndex(value => value.x === movement.piece.x && value.y=== movement.piece.y)

   if(indexPiece >-1){
    Cal[indexPiece] = {
      image: movement.piece.image, x: movement.x, y: movement.y, color:movement.piece.color, type:movement.piece.type
    }
   }
   if(movement.piece.color==='w'){
   let checkTest = Check("w",Cal)
    if (checkTest=== false) {
      return(Cal)
    }
    else{
        return(false)
    }
  }
  else{
    let checkTest = Check("b",Cal)
    if (checkTest=== false) {
      return(Cal)
    }
    else{
        return(false)
    }
  }
}