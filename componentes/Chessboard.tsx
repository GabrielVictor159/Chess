import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Tile from "./Tile";
import MovementType from "../Controller/MovementType";
import InitialPieces from "../Controller/InitialPieces";
import Piece from "../Model/Piece";
import Movement from "../Model/Movement";
import Check from "../Controller/Check";
import MovementAction from "../Controller/MovementAction";
import Images from "../Model/Images";
import CheckMatte from "../Controller/CheckMatte";
import MovementFylter from "../Controller/MovementFylter";
import randomMove from "../Controller/IA/randomMove";
import moveBasedRelativeStrength from "../Controller/IA/moveBasedRelativeStrength";
import miniMax from "../Controller/IA/miniMax";
import { Overlay } from "@rneui/themed";
export default function Chessboard(props) {
  const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const [pieces, setPieces] = useState<Piece[]>(InitialPieces());
  const [whitePeriod, setWhitePeriod] = useState(true);
  const [blackPeriod, setBlackPeriod] = useState(false);
  const [movement, setMovement] = useState<Movement[]>([]);
  const [pawnTransition, setPawnTransition] = useState<Piece>();
  const [gameOver, setGameOver] = useState(false)
  const [checkMatteBlack, setCheckMatteBlack] = useState(false)
  const [checkMatteWhite, setCheckMatteWhite] = useState(false)
 
  useEffect(() => {
    if (blackPeriod === true && CheckMatte("b", pieces) !== true) {
      try {
        moveBlack();
      } 
      catch{

      }
    }
    else if(CheckMatte("b", pieces) === true){
      setGameOver(true)
      setCheckMatteBlack(true)
      setBlackPeriod(false)
      setWhitePeriod(false)
    }
    if (Check("w", pieces)) {
      if (CheckMatte("w", pieces)) {
        setGameOver(true)
        setCheckMatteWhite(true);
        setBlackPeriod(false);
        setWhitePeriod(false);
      } 
    }
    
   
  });
  function reset(){
    setCheckMatteBlack(false)
    setCheckMatteWhite(false)
    setGameOver(false)
    setWhitePeriod(true)
    setBlackPeriod(false)
    setPieces(InitialPieces())
    setMovement([])
  }
  function moveBlack() {
    let loop = true;
    let newBoard;
    if(props.dificulty==='easy'){
      newBoard = randomMove('b',pieces)
    }
    else if(props.dificulty==='medium'){
      newBoard = moveBasedRelativeStrength('b',pieces)
    }
    else{
    newBoard = miniMax("b", "w", pieces);
    }
    if (newBoard != false) {
      setPieces(newBoard);
    }
    let t = newBoard === false ? pieces : newBoard;
    let pawnTransitionIndex = t.findIndex(value => value.y === 7 && value.type === "Pawn" && value.color === "b")
    if(pawnTransitionIndex>-1){
      t[pawnTransitionIndex].type='Queen'
      setPieces(t)
    }
    setBlackPeriod(false);
    setWhitePeriod(true);
  }
  function mov(movement) {
    let movimento = MovementAction(movement, pieces);
    let t = movimento === false ? pieces : movimento;
    let pawnTransitionIndex = t.findIndex(value => value.y === 7 && value.type === "Pawn" && value.color === "b")
    if (pawnTransitionIndex > -1) {
      setWhitePeriod(false);
      setBlackPeriod(false);
      setPieces(t);
      setMovement([]);
      setPawnTransition(t[pawnTransitionIndex]);
    } else if (movimento === pieces) {
    } else {
      setPieces(t);
      setMovement([]);
      if (movement.piece.color === "w") {
        setWhitePeriod(false);
        setTimeout(() => {
          setBlackPeriod(true);
        }, props.dificulty==='medium'|| props.dificulty==='easy'?1000:200);
      } else {
        setBlackPeriod(false);
        setWhitePeriod(true);
      }
    }
  }
  function clickPiece(Callback) {
    let o = MovementType(Callback, pieces);
    let v = MovementFylter(o, pieces);
    setMovement(v);
  }
  function alterPawn(selectPawnType) {
    let pieceIndex = pieces.findIndex(
      (value) =>
        value.x == pawnTransition.x && value.y == pawnTransition.y && value.type==pawnTransition.type
    );
    let z: Piece[] =[]
     pieces.map((value,id)=>{
      z.push(value)
     })
    switch (selectPawnType) {
      case "Queen":
      z[pieceIndex].image=z[pieceIndex].color==='w'?Images.QueenWhite:Images.QueenBlack
      z[pieceIndex].type="Queen"
        break;
      case "Horse":
        z[pieceIndex].image=z[pieceIndex].color==='w'?Images.HorseWhite:Images.HorseBlack
        z[pieceIndex].type="Horse"
        break;
      case "Tower":
        z[pieceIndex].image=z[pieceIndex].color==='w'?Images.TowerWhite:Images.TowerBlack
        z[pieceIndex].type="Tower"
        break;
      case "Bishop":
        z[pieceIndex].image=z[pieceIndex].color==='w'?Images.BishopWhite:Images.BishopBlack
        z[pieceIndex].type="Bishop"
        break;
    }
   setPieces(z);
   if(pawnTransition.color==='w'){
    setBlackPeriod(true)
    setWhitePeriod(false)
   }
   else{
    setBlackPeriod(false)
    setWhitePeriod(true)
   }
   setPawnTransition(undefined)
  }
  function map() {
    let index = 0;
    let border = [];
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
            pic = p;
          }
        });
        if (color === "w" && whitePeriod === true) {
          border.push(
            <TouchableHighlight
              key={`${i},${z}`}
              style={{
                width: "12.5%",
                height: "12.5%",
                backgroundColor: "red",
              }}
              onPress={() => {
                clickPiece(pic);
              }}
            >
              <View>
                <Tile image={image} number={number} index={index} />
              </View>
            </TouchableHighlight>
          );
        } else {
          border.push(
            <View
              key={`${i},${z}`}
              style={{
                width: "12.5%",
                height: "12.5%",
                backgroundColor: "red",
              }}
            >
              <Tile image={image} number={number} index={index} />
            </View>
          );
        }

        index++;
      }
    }
    return border;
  }
  function mapMovement() {
    let Callback = [];
    for (let i = 0; i < horizontalAxis.length; i++) {
      for (let z = 0; z < verticalAxis.length; z++) {
        let movementX = undefined;
        let movementY = undefined;
        let movi = undefined;
        movement.forEach((m) => {
          if (m.x === z && m.y === i) {
            movementX = m.x;
            movementY = m.y;
            movi = m;
          }
        });
        if (movementX === undefined) {
          Callback.push(
            <View
              key={`${i},${z},Movement`}
              style={{ width: "12.5%", height: "12.5%" }}
            ></View>
          );
        } else {
          Callback.push(
            <TouchableHighlight
              key={`${i},${z},Movement`}
              style={{
                width: "12.5%",
                height: "12.5%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                mov(movi);
              }}
            >
              <View
                style={{
                  width: "80%",
                  height: "80%",
                  backgroundColor: "green",
                  borderRadius: 100,
                  opacity: 0.5,
                }}
              ></View>
            </TouchableHighlight>
          );
        }
      }
    }
    return Callback;
  }

  return (
    <>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#2F6183",
          width: "90%",
          height: 370,
        }}
      >
        <View
          style={{
            position: "absolute",
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
            position: "absolute",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {mapMovement()}
        </View>
      </View>

      {pawnTransition !== undefined ? (
        <View
          style={{
            position: "absolute",
            top: pawnTransition.color === "w" ? "15%" : "75%",
            width: "60%",
            height: 80,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            elevation: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: "20%",
              height: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => alterPawn("Queen")}
          >
            <Image
              style={{ width: "100%", height: "80%" }}
              source={
                pawnTransition.color === "w"
                  ? Images.QueenWhite
                  : Images.QueenBlack
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "20%",
              height: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => alterPawn("Tower")}
          >
            <Image
              style={{ width: "100%", height: "80%" }}
              source={
                pawnTransition.color === "w"
                  ? Images.TowerWhite
                  : Images.TowerBlack
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "20%",
              height: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => alterPawn("Horse")}
          >
            <Image
              style={{ width: "100%", height: "80%" }}
              source={
                pawnTransition.color === "w"
                  ? Images.HorseWhite
                  : Images.HorseBlack
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "20%",
              height: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => alterPawn("Bishop")}
          >
            <Image
              style={{ width: "100%", height: "80%" }}
              source={
                pawnTransition.color === "w"
                  ? Images.BishopWhite
                  : Images.BishopBlack
              }
            />
          </TouchableOpacity>
          
        </View>
      ) : (
        <></>
      )}
      <View style={{backgroundColor:'#0F4C75', width:'100%', height:120, position:'absolute',top:0, alignItems:'center', justifyContent:'flex-start'}}>
        <Text style={{top:'60%', color:'white', fontSize:20}}>
        {props.dificulty==='easy'?'Modo Facil':props.dificulty==='Modo medium'?'Medio':'Modo Dificil'}
        </Text>
      </View>
      <Overlay isVisible={gameOver} 
      overlayStyle={{
        width:300,
        height:300,
        alignItems:'center',
        justifyContent:'center'
      }}
      >
        <Text style={{fontSize:30, textAlign:'center'}}>{checkMatteBlack?'Parabens voce ganhou':'Voce perdeu'}</Text>
        <TouchableOpacity style={{width:60, height:60, borderRadius:15,borderWidth:1,top:30, backgroundColor:'white', elevation:10, alignItems:'center', justifyContent:'center'}}
         onPress={()=>{
          reset();
         }}
         >
          <Image style={{width:'60%', height:'60%'}} source={require('../assets/reloadIcon.png')}/>
         </TouchableOpacity>
      </Overlay>
      <View style={{width:'100%', height:'100%', position:'absolute', justifyContent:'flex-end'}}>
      <View style={{width:'100%', height:140, backgroundColor:'#0F4C75', borderTopLeftRadius:20, borderTopRightRadius:20,  justifyContent:'center'}}>
        <View style={{width:'100%', height:100, flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
         <TouchableOpacity style={{width:60, height:60, borderRadius:15, backgroundColor:'white', elevation:10, alignItems:'center', justifyContent:'center'}}
         onPress={()=>{
          reset();
         }}
         >
          <Image style={{width:'60%', height:'60%'}} source={require('../assets/reloadIcon.png')}/>
         </TouchableOpacity>
        </View>
      </View>
      </View>
      
    </>
  );
}
