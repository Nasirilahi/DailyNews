import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
} from 'react-native';
import styles from '../styles';
import ListRow from './ArticlesListRow';

 _keyExtractor = (item, index) => index;


const ArticlesListContainer = ({articles, onArticleSelect})=>{
    return(
        <View style={styles.listContainer}>
            { 
                 <FlatList
                    data={articles}
                    renderItem={({item}) => <ListRow item={item} onArticleSelect={onArticleSelect} />}
                    keyExtractor={_keyExtractor}
                />
            } 
        </View>
    );
};

export default ArticlesListContainer;
