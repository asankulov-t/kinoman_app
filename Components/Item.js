import {StyleSheet, Image, Text, View, Dimensions, } from "react-native";
import Animation from "./Animation";


const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height

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
                    {/*<View style={styles.remarkBlock}>*/}
                    {/*    <Text style={styles.remarkText}>Описание: {item.item.remark.slice(0,260)+'...'}</Text>*/}
                    {/*</View>*/}
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
        justifyContent: 'flex-start',
        marginTop: 5,
        height: HEIGHT/6
    },
    img: {
        width:95,
        height: HEIGHT/6,
        objectFit: 'cover'
    },
    info: {
        marginLeft: 10
    },
    nameAge:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        textAlign:'center',
        flexWrap: 'wrap',
        flexShrink: 1,
        width:WIDTH
    },
    title:{
        fontSize: 13,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 1,
        marginRight:7,
    },

    duration:{
        fontSize: 13,
        color: '#ffffff',
        fontWeight: 'bold',
        marginRight:10,
    },

    red: {
        fontSize: 13,
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
        fontSize: 13,
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
    },
    textWrapper: {
        marginTop: 5,
        display: "flex",
        flexDirection: 'column',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems: 'center',
        textAlign:'center',
        backgroundColor: '#343434',
        borderWidth: 1,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        marginRight: 5,
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop:0,
        borderColor: '#404040'
    },
    remarkBlock:{
        width:550
    },
    remarkText:{
      color:'#fff',
        fontWeight:'bold',
        fontSize:10
    },
    priceBlock:{
       display:'flex',
       flexDirection:'row',
       alignItems:'center',
       margin:0
    },
    price:{
        fontSize:8,
        color: '#ffdc7d',
        fontWeight: 'bold',
        paddingBottom:2
    },
    format: {
        fontSize:8,
        color: '#ffdc7d',
        fontWeight: 'bold',
        paddingBottom:2
    },
    session: {
        textAlign: 'center',
        color: '#ffdc7d',
        fontWeight: 'bold',
        fontSize: 10,
    },
})
export default Item;