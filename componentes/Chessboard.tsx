import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Tile from "./Tile";
import Animated, { Value } from "react-native-reanimated";
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
export default function Chessboard() {
  const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const [pieces, setPieces] = useState<Piece[]>(InitialPieces());
  const [whitePeriod, setWhitePeriod] = useState(true);
  const [blackPeriod, setBlackPeriod] = useState(false);
  const [movement, setMovement] = useState<Movement[]>([]);
  const [pawnTransition, setPawnTransition] = useState<Piece>();




  useEffect(()=>{
    if(blackPeriod === true){
      moveBlack()
    }
    if(Check('w',pieces)){
      if(CheckMatte('w',pieces)){
        alert('CHECKMATTE BRANCO')
      }
      else{
        alert('Check branco')
      }
    }
    if(Check('b', pieces)){
      if(CheckMatte('b',pieces)){
        alert('CHECKMATTE PRETO')
      }
      else{
        alert('Check preto')
      }
    }
  })
  function moveBlack(){
    let loop = true
    let newBoard;
    while(loop){
      newBoard = randomMove('b', pieces)
      if(newBoard!=false){
        break;
      }
    }
    setPieces(newBoard)
    setBlackPeriod(false)
    setWhitePeriod(true)
  }
  function mov(movement) {
    let movimento = MovementAction(movement, pieces);
    let t = movimento===false?pieces:movimento
    let pawnTransitionIndex = t.findIndex(
      (value) =>
        (value.y === 7 && value.type === "Pawn" && value.color === "b") ||
        (value.y === 0 && value.type === "Pawn" && value.color === "w")
    );
    if (pawnTransitionIndex > -1) {
      setWhitePeriod(false);
      setBlackPeriod(false);
      setPawnTransition(movimento[pawnTransitionIndex]);
    } 
    else if(movimento === pieces){
    
    }
    else {
      if (movement.piece.color === "w") {
        setWhitePeriod(false);
        setBlackPeriod(true);
      } else {
        setBlackPeriod(false);
        setWhitePeriod(true);
      }
    }
    setPieces(t);
    setMovement([]);
  }
  function clickPiece(Callback) {
    let o = MovementType(Callback, pieces);
    let v = MovementFylter(o,pieces)
    setMovement(v);
  }
  function alterPawn(selectPawnType) {
    let pieceIndex = pieces.findIndex(
      (value) =>
        value === pawnTransition
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
        if (
          (color === "w" && whitePeriod === true) 
        ) {
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
          width: "100%",
          height: 400,
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
            onPress={()=>
            alterPawn('Queen')
            }
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
            onPress={()=>
              alterPawn('Tower')
              }
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
            onPress={()=>
              alterPawn('Horse')
              }
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
            onPress={()=>
              alterPawn('Bishop')
              }
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
    </>
  );
}
