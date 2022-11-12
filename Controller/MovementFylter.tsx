import MovementAction from "./MovementAction";


export default function MovementFylter(movement, board ){
    
let newBoard = board;
let newMovements = []

movement.filter((value)=>{
    if(MovementAction(value, board)!==false){
        newMovements.push(value) 
    }
})

return newMovements.filter((value)=>{
    if(value.x>=0 && value.x<=7 && value.y>=0 && value.y<=7){
        return value
    }
})
}