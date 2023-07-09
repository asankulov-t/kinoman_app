import {Button, FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {req} from "./Api";
import React, { useEffect, useRef, useState} from "react";


export default function App() {
  let CurrentSlide=0
  let [active,setActive]=useState(0)
  let refs=useRef()
  let [offset,setOffset] = useState(20);
  const [index, setIndex] = useState(0);

  // const slowlyScrollDown = () => {
  //   const y = offset + 80;
  //   refs.current?.scrollTo({x: 0, y, animated: true});
  //   setOffset(y);
  // }
  const autoScroll = () => {
    let offset = 0;
    setInterval(()=> {
      offset += 100
      refs.current.scrollTo({x: 0, y: offset, animated: true})
    }, 1000)
  }
  // setInterval(()=>{
  //   if (offset >= data.length-1){
  //     setOffset(0)
  //   }else {
  //     refs.current.scrollTo({
  //       y:offset,
  //       x:offset,
  //       animated:true
  //     })
  //     console.log(refs.current.scrollTo)
  //   }
  // },6000)


  let [data,setData]=useState('')
  useEffect(()=>{
    req.getToken('10.07.2023').then(r=>setData(r))
    autoScroll()
  },[])

  console.log(data)
  return (<View style={styles.container}>
        <ScrollView ref={refs}>
          <Button onPress={autoScroll} title={'saasa'}/>
          {data?data.map((t)=>{
            return  <View style={styles.wrapper}>
              <View>
                <Image source={{uri:'https://api.broadway.kg/files/'+t.picture.fileName+'.png'}}
                       style={styles.img}/>
              </View>
              <View style={styles.info}>
                <Text style={styles.cur}>{CurrentSlide}</Text>
                <Text style={styles.title}>{t.filmName}</Text>
                <View><Text style={styles.sessionText}>Сеансы: </Text></View>
                <View style={styles.sessions}>
                  {t.times.map((t)=><Text key={t.time} style={styles.session}>{t.time}</Text>)}
                </View>
              </View>
            </View>
          }):<Text>hello</Text>}

        </ScrollView>

      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',

  },
  wrapper:{
    display:'flex',
    flexDirection:'row',
    marginTop:25
  },
  cur:{
    color:'#bee3ff'
  },
  info:{
    marginLeft:25
  },
  title:{
    fontSize:15,
    color:'#fffcfa',
    fontWeight:'bold',
    marginTop: 8,

  },
    sessions:{
      marginTop:15,
      display: 'flex',
      flexDirection: 'row',
      alignItems:'center'
    },
  sessionText:{
    color:'#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  session:{
    textAlign:'center',
    paddingRight:15,
    paddingLeft:15,
    color:'#000000',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight:30,
    backgroundColor: '#fcc537',
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderColor:'#f1f0f0'
  },
  img:{
    width:50,
    height:90,
  }
});
