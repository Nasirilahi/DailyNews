import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width , height } = Dimensions.get('window');
/**
 * list View single row component
 * **/

const Row = ({item: {
    category, 
    description,
    name,
    url,
    id,
   
}, onSourceSelect}) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={() => onSourceSelect(id)}>
           <View style={styles.dataContainer}>
               <Text style={styles.titleText}>{`${name}`}</Text>
               <View style={styles.detailContainer}>
                   <Text style={styles.fielText}>{'Category -'}</Text>
                   <Text style={[styles.amountText,{}]}>{category.toUpperCase()}</Text>
               </View>
               <View style={styles.detailContainer}>
                   <Text style={styles.fielText}>{'Descriotion - '}</Text>
                   <Text style={styles.amountText}>{description}</Text>
               </View>
           </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:10,
        padding:5,
        borderRadius:3,
        backgroundColor:'white',
        width: width-20,
    },
    dataContainer:{
        flex:1,
    },
    arrowContainer:{
        marginLeft:5,
        justifyContent:'center',
        paddingHorizontal:8,
    },
    detailContainer:{
        flexDirection:'row',
        marginBottom:5,
        flexWrap:'wrap',
    },
    titleText: {
        fontSize: 18,
        color:'#63aede',
        marginBottom:5,
        fontWeight:'bold',
    },
    amountText:{
        color:'rgba(0,0,0,0.54)',
    },
    fielText:{
        color :'#D1A828',
        fontWeight:'bold'
    },
});

export default Row;