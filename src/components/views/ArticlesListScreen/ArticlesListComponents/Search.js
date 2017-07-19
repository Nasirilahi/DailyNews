import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';
import styles from '../styles';


/**
 * Search bar component
 * **/
const Search = ({searchText,setSearchText})=>{
    return(
        <View style={styles.searchContainer}>
            <Icon style={{backgroundColor:'transparent'}} name='search' size={20} color='white'/>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setSearchText(text)}
                placeholder={'Search by name'}
                autoCapitalize='none'
                value={searchText}
                underlineColorAndroid={'white'}
                placeholderTextColor={'rgba(255,255,255,0.50)'}
            />
        </View>
    );
};

export default Search;