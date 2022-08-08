import * as React from 'react';
import { View,Text, FlatList } from 'react-native';
import RoundButton from '../shared/button';

const clickme = () =>{
    console.log("test");
}

export default function HomeScreen(navigation){
    return(
        <View style={{flex:1}}>
            <Text
                onPress={()=> alert('This is Home screen')}
                style={{fontSize:26, fontWeight:"bold"}}>danh sach benh vien</Text>
            <RoundButton buttonClickedHandler={clickme}/>
        </View>
    );
}