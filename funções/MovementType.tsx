import React from "react";
import Movement from "../componentes/Movement";

export default function MovementType(piece, move, board) {
  let movement: Movement[] = [];

  if (piece.type === "Pawn") {
    let z = 0;
    for (let i = piece.y - 1; i < 8 && i >= 0; i--) {
      if (z < 2) {
        let p = 0;
        let l = board.filter((post) => {
          if (post.x === piece.x && post.y === i) {
            p++;
            return post;
          }
        });
        let k = [];

        let kill = board.filter((post) => {
          if (
            post.x === piece.x + 1 &&
            post.y === piece.y - 1 &&
            post.color != piece.color
          ) {
            k.push({ x: post.x, y: post.y, piece: piece });
            return post;
          } else if (
            post.x === piece.x - 1 &&
            post.y === piece.y - 1 &&
            post.color != piece.color
          ) {
            k.push({ x: post.x, y: post.y, piece: piece });
            return post;
          }
        });

        if (k.length !== 0) {
          for (let w = 0; w < k.length; w++) {
            movement.push({ x: k[w].x, y: k[w].y, piece: piece });
          }
        }
        if (p != 0) {
          break;
        } else {
          movement.push({ x: piece.x, y: i, piece: piece });
          z++;
        }
      } else {
        break;
      }
    }
  } else if (piece.type === "Tower") {
    let z = 0;
    for (let i = piece.y - 1; i < 8 && i >= 0; i--) {
      let p = 0;
      let igual = 0;
      let l = board.filter((post) => {
        if (post.x === piece.x && post.y === i) {
          if (post.color === piece.color) {
            igual++;
          }
          p++;
          return post;
        }
      });
      if (igual === 0) {
        movement.push({ x: piece.x, y: i, piece: piece });
        z++;
      }
      if (p != 0) {
        break;
      }
    }
    for (let i = piece.y + 1; i < 8 && i >= 0; i++) {
      let p = 0;
      let igual = 0;
      let l = board.filter((post) => {
        if (post.x === piece.x && post.y === i) {
          if (post.color === piece.color) {
            igual++;
          }
          p++;
          return post;
        }
      });

      if (igual === 0) {
        movement.push({ x: piece.x, y: i, piece: piece });
        z++;
      } else if (p != 0) {
        break;
      }
    }
    for (let x = piece.x - 1; x >= 0 && x < 8; x--) {
      let p = 0;
      let igual = 0;
      let l = board.filter((post) => {
        if (post.y === piece.y && post.x === x) {
          if (post.color === piece.color) {
            igual++;
          }
          p++;
          return post;
        }
      });
      if (igual == 0) {
        movement.push({ x: x, y: piece.y, piece: piece });
        z++;
      }
      if (p != 0) {
        break;
      }
    }
    for (let x = piece.x + 1; x >= 0 && x < 8; x++) {
      let p = 0;
      let igual = 0;
      let l = board.filter((post) => {
        if (post.y === piece.y && post.x === x) {
          if (post.color === piece.color) {
            igual++;
          }
          p++;
          return post;
        }
      });
      if (igual === 0) {
        movement.push({ x: x, y: piece.y, piece: piece });
        z++;
      }
      if (p != 0) {
        break;
      }
    }
  } else if (piece.type === "Horse") {
    let h1=0;
    let h2=0;
    let h3=0;
    let h4=0;
    let h5=0;
    let h6=0;
    let h7=0;
    let h8=0;
    board.filter((post)=>{
      //h1
      if(post.x==piece.x+1 &&  post.y===piece.y+2 && post.color===piece.color){
        h1++;
      }
      //h2
      if(post.x==piece.x-1 &&  post.y===piece.y+2 && post.color===piece.color){
        h2++;
      }
      //h3
      if(post.x==piece.x+1 &&  post.y===piece.y-2 && post.color===piece.color){
        h3++;
      }
      //h4
      if(post.x==piece.x-1 &&  post.y===piece.y-2 && post.color===piece.color){
        h4++;
      }
      //h5
      if(post.x==piece.x-2 &&  post.y===piece.y-1 && post.color===piece.color){
        h5++;
      }
      //h6
      if(post.x==piece.x+2 &&  post.y===piece.y-1 && post.color===piece.color){
        h6++;
      }
      //h7
      if(post.x==piece.x-2 &&  post.y===piece.y+1 && post.color===piece.color){
        h7++;
      }
      //h8
      if(post.x==piece.x+2 &&  post.y===piece.y+1 && post.color===piece.color){
        h8++;
      }
    })
    if(h1===0){
    movement.push({x:piece.x+1, y:piece.y+2, piece:piece})
    }
    if(h2===0){
    movement.push({x:piece.x-1, y:piece.y+2, piece:piece})
    }
    if(h3===0){
    movement.push({x:piece.x+1, y:piece.y-2, piece:piece})
    }
    if(h4===0){
    movement.push({x:piece.x-1, y:piece.y-2, piece:piece})
    }
    if(h5===0){
    movement.push({x:piece.x-2, y:piece.y-1, piece:piece})
    }
    if(h6===0){
    movement.push({x:piece.x+2, y:piece.y-1, piece:piece})
    }
    if(h7===0){
    movement.push({x:piece.x-2, y:piece.y+1, piece:piece})
    }
    if(h8===0){
    movement.push({x:piece.x+2, y:piece.y+1, piece:piece})
    }
  }
  else if (piece.type === "Bioshop") {

  }
  return movement;
}
