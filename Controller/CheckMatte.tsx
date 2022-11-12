
import Check from "./Check";
import MovementAction from "./MovementAction";
import MovementType from "./MovementType";
import Piece from "../Model/Piece";
import GenerateMoves from "./GenerateMoves";
export default function CheckMatte(color, board){
let test = GenerateMoves(color, board)
return Check(color, board) && test.length===0
}



 