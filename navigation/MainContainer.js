import * as React from 'react';
import { View,Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './Screen/HomeScreen';
import DetailScreen from './Screen/DetailScreen';
import NewsScreen from './Screen/NewsScreen';

//Screen name
const homeName = 'Home';
const detailsName='Details';
const newsName='News';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route})=>({
                    tabBarIcon:({focused, color, size})=>{
                        let iconName;
                        let rn = route.name;

                        if(rn=== homeName){
                            iconName = focused ? 'home' : 'home-outline'
                        }  else if(rn=== newsName) {
                            iconName = focused ? 'list' : 'list-outline'
                        } else if (rn=== detailsName){
                            iconName = focused ? 'settings' : 'settings-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}>

                <Tab.Screen name={homeName} component ={HomeScreen}/>  
                <Tab.Screen name={newsName} component ={NewsScreen}/> 
                <Tab.Screen name={detailsName} component ={DetailScreen}/>   
            

            </Tab.Navigator>
        </NavigationContainer>
    );
}