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
    console.log('urlurlurlurl',url);
    return(
           <WebView
                source={{uri: url}}
            />
    );
};

export default ArticleWebView;
