import * as React from 'react';
import { View,Text,ScrollView } from 'react-native';
import Article from '../Components/Article';
export default function HomeScreen(navigation){
    return(
        <ScrollView style={{flex:1}}>
            <Article/>
        </ScrollView>
    );
}