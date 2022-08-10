import * as React from 'react';
<<<<<<< HEAD
import { View,Text,ScrollView } from 'react-native';
import Article from '../Components/Article';
export default function HomeScreen(navigation){
    return(
        <ScrollView style={{flex:1}}>
            <Article/>
        </ScrollView>
=======
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
>>>>>>> 24daade6f9ff87eb4f782ecbb30de753c2a59ad5
    );
}