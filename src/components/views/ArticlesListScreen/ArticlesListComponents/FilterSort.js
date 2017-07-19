import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from '../styles';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

/*
 *
 * functional Filter component filter/Sorting options
 * **/

const renderTouchable = () => <TouchableOpacity/>;

const FilterSort = ({sortingListView})=>{
    return(
        <View style={styles.filterSortContainer}>
            <Menu onSelect={(value) => sortingListView(value)}>
                    <MenuTrigger renderTouchable={renderTouchable}  style={styles.menuTrigger}>
                        <Icon style={{backgroundColor:'transparent'}}  name='sort-amount-desc' size={20} color='white'/>
                    </MenuTrigger>
                    <MenuOptions style={styles.menuOptions}>
                        <MenuOption value='top'>
                            <Text style={styles.menuOpetionsText}>Top</Text>
                        </MenuOption>
                        <MenuOption value='latest'>
                            <Text style={styles.menuOpetionsText}>Latest</Text>
                        </MenuOption>
                        <MenuOption value='popular'>
                            <Text style={styles.menuOpetionsText}>Popular</Text>
                        </MenuOption>
                    </MenuOptions>
            </Menu>
        </View>
    );
};

export default FilterSort;