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
    title,
    author,
    description,
    publishedAt,
    url,
    urlToImage,
}, onArticleSelect, item}) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={() => onArticleSelect(item)}>
           <View style={styles.dataContainer}>
               <Text style={styles.titleText}>{`${title}`}</Text>
               <View style={styles.detailContainer}>
                   <Text style={styles.fielText}>{'Description -'}</Text>
                   <Text style={[styles.amountText,{}]}>{description}</Text>
               </View>
               <View style={styles.detailContainer}>
                   <Text style={styles.fielText}>{'PublishedAt - '}</Text>
                   <Text style={styles.amountText}>{publishedAt}</Text>
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
        backgroundColor:'rgba(106,90,205, 0.6)',
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
        color:'#ffd700',
        marginBottom:5,
        fontWeight:'bold',
    },
    amountText:{
        color:'rgb(255,255,255)',
    },
    fielText:{
        color :'darkturquoise',
        fontWeight:'bold'
    },
});

export default Row;