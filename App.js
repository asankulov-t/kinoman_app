import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {req} from "./Api";
import React, {useEffect, useRef, useState} from "react";

export default function App() {
  // const autoScroll = () => {
  //   let offset = 0;
  //   setInterval(()=> {
  //     offset += 20
  //     scrollViewRef.current?.scrollTo({x: 0, y: offset, animated: true})
  //   }, 1000)
  // }
  let [data,setData]=useState('')
  let day=new Date().toLocaleDateString()
  useEffect(()=>{
    req.getToken('08.07.2023').then(r=>setData(r))

  },[])
  const scrollViewRef = useRef();
  console.log(data)

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} >
        {data&&data.map((t)=>{
          return <View>
            <Image source={{uri:'https://api.broadway.kg/files/'+t.picture.fileName+'.png'}} style={styles.img}/>
            <Text>{t.filmName}</Text>
          </View>
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:'400px',
    height:'250px'
  }
});
