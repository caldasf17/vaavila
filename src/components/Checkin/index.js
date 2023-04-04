import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Checkin() {
    return(
        <View style ={styles.container}>
            
            <TouchableOpacity style={styles.button}>

            <Text style={styles.buttonText}>Check In</Text>
            <View style={styles.buttonLine}></View>
            
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        bottom: 0,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#000080',
        paddingVertical: 30,
        paddingHorizontal: 80,
        borderRadius: 50,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    textAlign: 'center',
    },
    buttonLine: {
        flex: 1,
        height: 2,
        backgroundColor: '#000080',
        marginLeft: 10,
        
    },
});