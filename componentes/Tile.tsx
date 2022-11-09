import React from 'react'
import { Image, View } from 'react-native'

export default function Tile(props){
    if(props.number%2==0){
       return <View style={{width:'100%', height:'100%', backgroundColor:'#E8EDF9'}}>
        <Image style={{width:'100%', height:'100%'}} source={props.image}/>
       </View>;            
    }
    else{
        return <View style={{width:'100%', height:'100%', backgroundColor:'#2F6183'}}>
            <Image style={{width:'100%', height:'100%'}} source={props.image}/>
        </View>;   
    }
    
}