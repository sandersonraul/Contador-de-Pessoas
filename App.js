import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from 'react';

export default function App() {
const[count,setCount] = useState(0); 

  function aumentar(){
    setCount(count + 1)
  }

  function diminuir(){
    do{
      setCount(count - 1)
    }
    while(count<=0)
  }
  
  return (
    <View style={styles.container}>
      <Text style ={styles.textTitle}>Contador de Pessoas</Text>
      <View style ={styles.box}>
        <Text style={styles.contagem}>{count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={aumentar}>
        <Text style={styles.textoBotao}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={diminuir}>
        <Text style={styles.textoBotao}>-</Text>
      </TouchableOpacity>
      
    </View>
    
  );
}  

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    backgroundColor:'#636ABA',
    justifyContent:'space-evenly',
    alignItems:'center'
    
  },
  
  textTitle:{
    color:'white',
    fontSize: 30,
    alignSelf:'center'
  },
  button:{
    borderRadius:10,
    backgroundColor:'#2E2252',
    width:150,
    height:100,
    justifyContent:'center',
    alignItems:'center'  
  },
  textoBotao:{
    color:'white',
    fontSize:50,
    alignSelf:'center'
  },
  box:{
    borderRadius: 10,
    backgroundColor:'white',
    width:150,
    height:100, 
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  contagem:{
    fontSize:50
    
  }
  
})