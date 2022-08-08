import * as React from 'react';
import { View,Text, FlatList } from 'react-native';
export default function HomeScreen(navigation){
    return(
        <View style={{flex:1}}>
            <Text
                onPress={()=> alert('This is Home screen')}
                style={{fontSize:26, fontWeight:"bold"}}>Home Screen</Text>
        </View>
    );
}