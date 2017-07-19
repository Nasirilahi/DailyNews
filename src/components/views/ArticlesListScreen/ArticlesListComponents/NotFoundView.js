import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

const NotFountView = () => { 
    return(
        <View style={styles.container}>
            <Image source={require('./noresults.png')} style={{width:250, height:300,}} />
        </View>
    );  
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
});
export default NotFountView;