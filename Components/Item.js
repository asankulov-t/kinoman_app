import {StyleSheet, Image, Text, View, Dimensions, } from "react-native";
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
                <View style={styles.nameAge}>
                    <Text style={styles.title}>{item.item.filmName}</Text>
                    <Text style={item.item.age==18?styles.red:styles.green}>{item.item.age}+</Text>
                </View>
                <View style={styles.sessions}>
                    {item.item.times.map((t) => <View style={styles.textWrapper} key={t.time}>
                        <Text style={styles.session}>{t.time}</Text>
                        <View style={styles.priceBlock}>
                            <Text style={styles.format}>{t.formatContent}   </Text>
                            <Text style={styles.price}>{t.getSessionPricesResponse.data.placesTypes.placeType.sum.text.replace('руб','сом').replace('00коп','')}</Text>
                        </View>
                    </View>)}
                </View>
                <View style={styles.description}>
                    <View style={styles.remarkBlock}>
                        <Text style={styles.remarkText}>Описание: {item.item.remark}</Text>
                    </View>
                    <View>
                        <Text style={styles.duration}>Старана: {item.item.country}</Text>
                        <Text style={styles.duration}>Продолжительность: {item.item.duration.text}</Text>
                    </View>
                </View>
            </View>
        </View>
    </Animation>
}
const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    },
    img: {
        width: 80,
        height: 130,
    },
    info: {
        marginLeft: 18
    },
    nameAge:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        textAlign:'center'
    },
    title:{
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 1,
        marginRight:7,
    },

    duration:{
        fontSize: 10,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 2,
        marginRight:10,
    },
    remarkBlock:{
        marginTop:2,
        marginBottom:2,
        width:700,
    },
    remarkText:{

        color:'#fff',
        fontSize:7,
        fontWeight:'bold'
    },
    red: {
        fontSize: 20,
        backgroundColor:'#c40000',
        padding:1,
        color: '#ffffff',
        fontWeight: 'bold',
        marginRight:10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    green: {
        fontSize: 20,
        backgroundColor:'#15bb2a',
        padding:1,
        color: '#ffffff',
        fontWeight: 'bold',
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
        textAlign:'center',
        width: 680
    },
    textWrapper: {

        marginTop: 6,
        display: "flex",
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        textAlign:'center',
        backgroundColor: '#000000',
        borderWidth: 1,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        marginRight: 9,
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop:0,
        borderColor: '#f1f0f0'
    },
    priceBlock:{
       display:'flex',
       flexDirection:'row',
       alignItems:'center',
       margin:0
    },
    price:{
        fontSize:8,
        color: '#ffffff',
        fontWeight: 'bold',
        paddingBottom:3
    },
    format: {
        fontSize:8,
        color: '#fdfdfd',
        fontWeight: 'bold',
        paddingBottom:3
    },
    session: {
        marginTop: 2,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 10,
    },
})
export default Item;