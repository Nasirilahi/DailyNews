import React, { Component } from 'react';
import {
    View, 
    Text
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import categories from './categories';

const CategorySelector = ({selectedCategory, onOptionSelect}) => {
    return(
       <Menu onSelect={category => onOptionSelect(category)}>
        <MenuTrigger>
            <Text>{`${selectedCategory.name} News`}</Text>
        </MenuTrigger>
        <MenuOptions>
            {
                categories.map((category, index) => {
                    return(
                         <MenuOption key={index} value={category}>
                                <Text>{category.name}</Text>
                        </MenuOption>
                    );
                })
            }
        </MenuOptions>
        </Menu>
    );
};

export default CategorySelector;