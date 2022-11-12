import Piece from "../Model/Piece"
import Images from "../Model/Images"
export default function InitialPieces(){
    let Callback:Piece[] =[]
    Callback.push(
        { image: Images.PawnBlack, x: 0, y: 1, color:'b', type:'Pawn'},
        { image: Images.PawnBlack, x: 1, y: 1, color:'b', type:'Pawn'},
        { image: Images.PawnBlack, x: 2, y: 1, color:'b', type:'Pawn' },
        { image: Images.PawnBlack, x: 3, y: 1, color:'b', type:'Pawn' },
        { image: Images.PawnBlack, x: 4, y: 1, color:'b', type:'Pawn' },
        { image: Images.PawnBlack, x: 5, y: 1, color:'b', type:'Pawn' },
        { image: Images.PawnBlack, x: 6, y: 1, color:'b', type:'Pawn' },
        { image: Images.PawnBlack, x: 7, y: 1, color:'b', type:'Pawn' },
        { image: Images.TowerBlack, x: 0, y: 0, color:'b', type:'Tower' },
        { image: Images.HorseBlack, x: 1, y: 0, color:'b', type:'Horse' },
        { image: Images.BishopBlack, x: 2, y: 0, color:'b', type:'Bishop' },
        { image: Images.QueenBlack, x: 3, y: 0, color:'b', type:'Queen' },
        { image: Images.KingBlack, x: 4, y: 0, color:'b', type:'King' },
        { image: Images.BishopBlack, x: 5, y: 0, color:'b', type:'Bishop' },
        { image: Images.HorseBlack, x: 6, y: 0, color:'b', type:'Horse' },
        { image: Images.TowerBlack, x: 7, y: 0, color:'b', type:'Tower' },
      
        { image:  Images.PawnWhite, x: 0, y: 6, color:'w', type:'Pawn' },
        { image:  Images.PawnWhite, x: 1, y: 6, color:'w', type:'Pawn' },
        { image:  Images.PawnWhite, x: 2, y: 6, color:'w', type:'Pawn' },
        { image:  Images.PawnWhite, x: 3, y: 6, color:'w', type:'Pawn' },
        { image:  Images.PawnWhite, x: 4, y: 6, color:'w', type:'Pawn' },
        { image:  Images.PawnWhite, x: 5, y: 6, color:'w', type:'Pawn' },
        { image:  Images.PawnWhite, x: 6, y: 6, color:'w', type:'Pawn' },
        { image:  Images.PawnWhite, x: 7, y: 6, color:'w', type:'Pawn' },
        { image:  Images.TowerWhite, x: 0, y: 7, color:'w', type:'Tower' },
        { image:  Images.HorseWhite, x: 1, y: 7, color:'w', type:'Horse' },
        { image:  Images.BishopWhite, x: 2, y: 7, color:'w', type:'Bishop' },
        { image:  Images.QueenWhite, x: 3, y: 7, color:'w', type:'Queen' },
        { image:  Images.KingWhite, x: 4, y: 7, color:'w' , type:'King' },
        { image:  Images.BishopWhite, x: 5, y: 7, color:'w' , type:'Bishop' },
        { image:  Images.HorseWhite, x: 6, y: 7, color:'w' , type:'Horse' },
        { image:  Images.TowerWhite, x: 7, y: 7, color:'w' , type:'Tower' }
    )
    return Callback
}