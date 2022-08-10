import * as React from 'react';
import { View,Text, StyleSheet, SafeAreaView, Image } from 'react-native';
const Article =({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/Benhvien/benh-vien-175.jpg')}
            style = {styles.image}/>
            <View style={{padding:80}}>
                <Text style={styles.title}>title</Text>
                <Text style={styles.description}>test</Text>
                <View style={styles.data}>
                    <Text style={styles.heading}>TPHCM</Text>
                    <Text style={styles.date}>5/5</Text>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Article;

const styles = StyleSheet.create({
    container:{
        width:"90%",
        alignSelf:"center",
        borderRadius:20,
        shadowOpacity:0.5,
        shadowColor:"#000",
        textShadowOffset:{
            height:5,
            width:5
        },
        backgroundColor:"#fff",
        marginTop:20
    },
    image:{
        height:200,
        width:"100%",
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    title:{
        fontSize:25,
        fontWeight:"600",
        marginTop: 10
    },
    description:{
        fontSize:18,
        fontWeight:"400",
        marginTop: 10
    },
    data:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10
    },
    heading:{

    },
    date:{
        fontWeight:"bold",
        color:"#e63946",
        fontSize:16
    }
});