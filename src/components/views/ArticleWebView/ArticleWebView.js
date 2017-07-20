import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    View,
    Text,
    WebView,
    TouchableOpacity
} from 'react-native';

const ArticleWebView = ({navigation})=>{
    const {state:{ params:{ url }}} = navigation;
    return(
        <View>
            <Text>{url}</Text>
        </View>
    );
};

export default ArticleWebView;
