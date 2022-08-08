import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <TextInput style={styles.searchInput} placeholder='Search here' />
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height:'100%',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing:1
    },
    searchInput:{
        width: '100%',
        height: '100%',
        paddingLeft:8,
        fontSize: 16,
    }
})