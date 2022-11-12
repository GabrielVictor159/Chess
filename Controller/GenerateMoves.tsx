import MovementFylter from "./MovementFylter"
import MovementType from "./MovementType"

export default function GenerateMoves(color, board){
    let piecesAllies = board.filter((post)=>{
        if(post.color === color){
            return post
        }
    })

    let allMovement = []
 
    for(let i =0; i<piecesAllies.length; i++){
        let test = MovementType(piecesAllies[i], board)
        for(let z = 0; z<test.length; z++){
            allMovement.push(test[z])
        }
    }
    
   let movements = MovementFylter(allMovement, board)

   return movements

    
}