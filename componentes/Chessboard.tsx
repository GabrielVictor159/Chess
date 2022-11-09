import React, {useState, useLayoutEffect} from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Tile from "./Tile";
import Animated from "react-native-reanimated";
import MovementType from "../funções/MovementType";
import InitialPieces from "../funções/InitialPieces";
import Piece from "./Piece";
import Movement from "./Movement";
export default function Chessboard() {

   


const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const [pieces, setPieces]= useState<Piece[]>(InitialPieces())
const [movement, setMovement]= useState<Movement[]>([])
function mov(movement){
  let v = pieces
  let Callback:Piece[] =pieces
   let o=0;
 pieces.filter((post) =>{
      
    if(post.x === movement.x && post.y === movement.y){
      Callback.splice(o,1)
      
      
    }
    else if(post.x === movement.piece.x && post.y===movement.piece.y){
      Callback.splice(o,1)
     
      
    }
    o++
    })

    Callback.push(
      { image:movement.piece.image, x: movement.x, y: movement.y, color:movement.piece.color, type:movement.piece.type},
    )
    
    setPieces(Callback)
    setMovement([])
}
function clickPiece(Callback){
  let o = MovementType(Callback, movement, pieces);

  setMovement(o)
  
}
function map() {
  let index = 0;
  let Callback = []
    for (let i = 0; i < horizontalAxis.length; i++) {
    for (let z = 0; z < verticalAxis.length; z++) {
      let number = i + z + 2;
      let image = undefined;
      let x = undefined;
      let y = undefined;
      let color = undefined;
      let type = undefined;
      let pic = undefined;
      pieces.forEach((p) => {
        if (p.x === z && p.y === i) {
          image = p.image;
          x = p.x;
          y = p.y;
          color = p.color;
          type = p.type;
          pic= p
        }
      });
      if(color==='w'){

       Callback.push( <TouchableHighlight
          key={`${i},${z}`}
          style={{ width: "12.5%", height: "12.5%", backgroundColor: "red" }}
          onPress={() => {
          clickPiece(pic)
           
          }}
        >
        <View>
        <Tile image={image} number={number} index={index} />
          
        </View>
          
        </TouchableHighlight>
       )
        }
        
        else{
          Callback.push( 
            <View
            key={`${i},${z}`}
          style={{ width: "12.5%", height: "12.5%", backgroundColor: "red" }}
            >
                <Tile image={image} number={number} index={index} />
            </View>
          )
        }
  
      index++;
    }
  }
return Callback
}
function mapMovement() {
  let Callback =[]
    for (let i = 0; i < horizontalAxis.length; i++) {
      for (let z = 0; z < verticalAxis.length; z++) {
        let movementX = undefined;
        let movementY = undefined;
        let pic = undefined
        movement.forEach((m)=>{
            if (m.x === z && m.y === i) {
          movementX = m.x
          movementY = m.y
          pic = m
            }
        })
        if(movementX===undefined){
            Callback.push(
                <View  key={`${i},${z},Movement`} style={{ width: "12.5%", height: "12.5%"}}>

                </View>
            )
        }
        else{
        Callback.push(
          <TouchableHighlight
            key={`${i},${z},Movement`}
            style={{ width: "12.5%", height: "12.5%", alignItems:'center', justifyContent:'center'}}
            onPress={() => {
             mov(pic)
              
            }}
          >
          <View style={{width:'80%', height:'80%', backgroundColor:'green', borderRadius:100, opacity:0.5}}>
       
            
          </View>
            
          </TouchableHighlight>
        );
        }
          
          
         
        
      }
    }
    return Callback;
  }


  return (
    <View style={{ backgroundColor: "#2F6183", width: "100%", height: 400 }}>
      <View
        style={{
            position:'absolute',
          width: "100%",
          height: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {map()}
      </View>
      <View
        style={{
            position:'absolute',
          width: "100%",
          height: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {mapMovement()}
      </View>
    </View>
  );
}
