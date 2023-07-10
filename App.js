import {Animated, Button, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {req} from "./Api";
import React, {useEffect, useRef, useState} from "react";
import RenderItem from "./Components/RenderItem";


export default function App() {
    let today=new Date().toLocaleDateString('ro-Ro')
    let [data, setData] = useState('')
    useEffect(() => {
        req.getToken(today).then(r => setData(r))
    }, [])


    return (<View style={styles.container}>
        {data&&<RenderItem data={data}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 15
    },
});
