import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, Image, Text, View, Dimensions} from "react-native";
import Item from "./Item";


const RenderItem = React.memo((props) => {
    let [movies, setMovies] = useState(props.data)
    let ref = useRef()
    let current = 0;

    useEffect(() => {
        setMovies(props.data)
        let startAutoPlay = setInterval(() => {
            if (current >= movies.length - 1) current = 0
            if (current < movies.length - 1) {
                ref.current?.scrollToIndex({
                    animated: true,
                    index: current++
                })
            }
        }, 10000)
        return () => clearInterval(startAutoPlay)
    }, [movies])

    return (movies&&<FlatList
            data={movies}
            ref={ref}
            renderItem={({item}) => <Item item={item}/>}
            keyExtractor={(item) => item.filmId}
        />
    )
}, [])


const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25
    },
})
export default RenderItem;