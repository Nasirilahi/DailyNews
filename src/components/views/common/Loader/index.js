import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import styles from './styles'

const Loader = () =>{
    return(
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <ActivityIndicator
                animating={true}
                style={[styles.centering, {height: 80}]}
                size="large"
                color='slateblue'
            />
        </View>
    );
};

export default Loader;