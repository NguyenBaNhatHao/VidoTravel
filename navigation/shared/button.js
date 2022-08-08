import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function RoundButton({buttonClickedHandler}){

    return(
        <View>
            <TouchableOpacity onPress={buttonClickedHandler}
            style={styles.Roundbutton}>   
                <View>
                    <Text>benh vien</Text>
                </View>
            </TouchableOpacity>
            <Text>tim benh vien</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Roundbutton:{
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'orange',
    }
})