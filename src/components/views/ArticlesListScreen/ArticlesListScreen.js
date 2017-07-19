import React, { Component } from 'react';
import {
    View, 
    Text,
} from 'react-native';
import styles from './styles';

class SourcesListScreen extends Component{
    static navigationOptions = {
        header:null,
    };
   
    render(){
        
        return(
           <View>
               <Text>{'Articles list screen'}</Text>
           </View>
        )
    }
}



export default SourcesListScreen;