import Piece from "../componentes/Piece"

export default function InitialPieces(){
    let Callback:Piece[] =[]
    Callback.push(
        { image: require("../assets/Pieces/Pawn_black.png"), x: 0, y: 1, color:'b', type:'Pawn'},
        { image: require("../assets/Pieces/Pawn_black.png"), x: 1, y: 1, color:'b', type:'Pawn'},
        { image: require("../assets/Pieces/Pawn_black.png"), x: 2, y: 1, color:'b', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_black.png"), x: 3, y: 1, color:'b', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_black.png"), x: 4, y: 1, color:'b', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_black.png"), x: 5, y: 1, color:'b', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_black.png"), x: 6, y: 1, color:'b', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_black.png"), x: 7, y: 1, color:'b', type:'Pawn' },
        { image: require("../assets/Pieces/Tower_black.png"), x: 0, y: 0, color:'b', type:'Tower' },
        { image: require("../assets/Pieces/Horse_black.png"), x: 1, y: 0, color:'b', type:'Horse' },
        { image: require("../assets/Pieces/Bishop_black.png"), x: 2, y: 0, color:'b', type:'Bishop' },
        { image: require("../assets/Pieces/Queen_black.png"), x: 3, y: 0, color:'b', type:'Queen' },
        { image: require("../assets/Pieces/King_black.png"), x: 4, y: 0, color:'b', type:'King' },
        { image: require("../assets/Pieces/Bishop_black.png"), x: 5, y: 0, color:'b', type:'Bishop' },
        { image: require("../assets/Pieces/Horse_black.png"), x: 6, y: 0, color:'b', type:'Horse' },
        { image: require("../assets/Pieces/Tower_black.png"), x: 7, y: 0, color:'b', type:'Tower' },
      
        { image: require("../assets/Pieces/Pawn_white.png"), x: 0, y: 6, color:'w', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_white.png"), x: 1, y: 6, color:'w', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_white.png"), x: 2, y: 6, color:'w', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_white.png"), x: 3, y: 6, color:'w', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_white.png"), x: 4, y: 6, color:'w', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_white.png"), x: 5, y: 6, color:'w', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_white.png"), x: 6, y: 6, color:'w', type:'Pawn' },
        { image: require("../assets/Pieces/Pawn_white.png"), x: 7, y: 6, color:'w', type:'Pawn' },
        { image: require("../assets/Pieces/Tower_white.png"), x: 0, y: 7, color:'w', type:'Tower' },
        { image: require("../assets/Pieces/Horse_white.png"), x: 1, y: 7, color:'w', type:'Horse' },
        { image: require("../assets/Pieces/Bishop_white.png"), x: 2, y: 7, color:'w', type:'Bishop' },
        { image: require("../assets/Pieces/Queen_white.png"), x: 3, y: 7, color:'w', type:'Queen' },
        { image: require("../assets/Pieces/King_white.png"), x: 4, y: 7, color:'w' , type:'King' },
        { image: require("../assets/Pieces/Bishop_white.png"), x: 5, y: 7, color:'w' , type:'Bishop' },
        { image: require("../assets/Pieces/Horse_white.png"), x: 6, y: 7, color:'w' , type:'Horse' },
        { image: require("../assets/Pieces/Tower_white.png"), x: 7, y: 7, color:'w' , type:'Tower' }
    )
    return Callback
}