import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import categories from './categories';
import Icon from 'react-native-vector-icons/FontAwesome';

const CategorySelector = ({selectedCategory, onOptionSelect}) => {
    return(
       <Menu style={styles.menuView} onSelect={category => onOptionSelect(category)}>
        <MenuTrigger style={styles.menuTrigger}>
            <Text style={styles.menuText}>{`${selectedCategory.name}`.toUpperCase()}</Text>
             <Icon  name='caret-down' size={20} color='white' />
        </MenuTrigger>
        <MenuOptions>
            {
                categories.map((category, index) => {
                    return(
                         <MenuOption key={index} value={category}>
                                 <Text style={styles.menuOpetionsText}>{category.name}</Text>
                        </MenuOption>
                    );
                })
            }
        </MenuOptions>
        </Menu>
    );
};

const styles = StyleSheet.create({
    menuView:{
        flex:1,
        marginLeft:10,
        justifyContent:'center',
    },
    menuTrigger:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingHorizontal:6,
    },
     menuText:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        marginRight:5,
    },
     menuOpetionsText:{
        color:'grey'
    }

});

export default CategorySelector;