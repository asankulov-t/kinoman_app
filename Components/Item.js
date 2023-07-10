import React, {useEffect, useRef} from 'react';
import {StyleSheet, Image, Text, View, Dimensions, Animated} from "react-native";
import Animation from "./Animation";

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Item = (item) => {
    return <Animation style={{
        width: WIDTH
    }}>
        <View key={item.filmName} style={styles.wrapper}>
            <View>
                <Image
                    source={{uri: 'https://api.broadway.kg/files/' + item.item.picture.fileName + item.item.picture.fileExt}}
                    style={styles.img}/>
            </View>
            <View style={styles.info}>
                <View style={styles.nameAge}><
                    Text style={styles.title}>{item.item.filmName}</Text>
                    <Text style={item.item.age==18?styles.red:styles.green}>{item.item.age}+</Text>
                </View>
                <Text style={styles.title}>{item.item.duration.text}</Text>
                <View style={styles.sessions}>
                    {item.item.times.map((t) => <View style={styles.textWrapper} key={t.time}>
                        <Text style={styles.session}>{t.time}</Text>
                        <Text style={styles.format}>{t.formatContent}</Text>
                    </View>)}
                </View>
            </View>
        </View>
    </Animation>
}
const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25
    },
    img: {
        width: 50,
        height: 90,
    },
    info: {
        marginLeft: 25
    },
    nameAge:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        textAlign:'center'
    },
    title:{
        fontSize: 15,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 8,
        marginRight:10,
    },
    red: {
        fontSize: 15,
        backgroundColor:'#c40000',
        padding:4,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 8,
        marginRight:10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    green: {
        fontSize: 15,
        backgroundColor:'#15bb2a',
        padding:4,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 8,
        marginRight:10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    sessions: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: WIDTH - 120
    },
    textWrapper: {
        marginTop: 7,
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fcc537',
        borderWidth: 3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginRight: 20,
        paddingRight: 15,
        paddingLeft: 15,
        borderColor: '#f1f0f0'
    },
    format: {

        color: '#f6f6f6',
        fontWeight: 'bold',
    },
    session: {
        marginTop: 3,
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
    },
})
export default Item;