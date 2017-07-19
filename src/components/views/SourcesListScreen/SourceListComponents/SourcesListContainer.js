import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';
import styles from '../styles';
import ListRow from './ListRow';

 _keyExtractor = (item, index) => item.id;

const SourcesListContainer = ({sources, onSourceSelect}) => {
    return(
        <FlatList
            data={sources}
            renderItem={({item}) => <ListRow item={item} onSourceSelect={onSourceSelect} />}
             keyExtractor={_keyExtractor}
        />
    );
};

export default SourcesListContainer;