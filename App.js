import {StyleSheet, Text, View} from 'react-native';
import {req} from "./Api";
import React, {useEffect, useState} from "react";
import RenderItem from "./Components/RenderItem";
import {HEIGHT} from "./Components/Item";


export default function App() {
    let today=new Date().toLocaleDateString('ro-Ro')
    let [data, setData] = useState('');

    useEffect(() => {
            req.getToken('17.07.2023').then(r => setData(r))
    }, [])
    return (<View style={styles.container}>
        {data?<RenderItem setData={setData} data={data}/>:<Text style={{color:'#fff' }}>some Error</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:HEIGHT,
        flex: 1,
        backgroundColor: '#000000',
        paddingRight: 20,
        paddingLeft:25 ,
    },
});
