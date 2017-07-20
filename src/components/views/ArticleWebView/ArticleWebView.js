import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
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
           <WebView
                source={{uri: url}}
            />
    );
};
ArticleWebView.navigationOptions = ({ navigation }) => ({
         title: `Articles Web View`,
         headerStyle:{backgroundColor:'goldenrod', paddingTop:20, height:70,},
         headerTitleStyle:{color:'white', fontSize:24,},
         gesturesEnabled:false,
         headerLeft:( <TouchableOpacity style={{marginLeft:10}} onPress={() => navigation.goBack()}>
                            <Icon name="md-arrow-back" size={30} color="#FFF" />
                    </TouchableOpacity>
        ),
});

export default ArticleWebView;
