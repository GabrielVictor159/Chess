import MovementType from "./MovementType";
export default function Check(color, board){
   let king;
     board.filter((post) => {
        if (post.color === color && post.type==='King') {
          
          king = post
        }
      });

    let piecesEnemy = board.filter((post) => {
        if (post.color !== color) {
          
          return post;
        }
      });
    
      let movement = []

    for(let i =0; i<piecesEnemy.length; i++){
       let movimento = MovementType(piecesEnemy[i], board);
       for(let z =0; z<movimento.length; z++){
        movement.push(movimento[z]);
       }
    }
    
    let check:boolean = false

    for(let i=0; i<movement.length;i++){
        if(movement[i].x === king.x && movement[i].y ===king.y){
            check =true;
        }
    }

    return check;
}