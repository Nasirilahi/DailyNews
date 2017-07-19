import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../../constants/colorConstants';

const { width , height } = Dimensions.get('window');

const styles = StyleSheet.create({
    outerContainer:{
        flex:1,
    },
    mainContainer: {
        marginTop:30, 
        flex:1,
        alignItems:'center',
    },
    categorySelector:{
        width: width-20,
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'steelblue',
    },
    categoryText:{
        color:COLORS.white,
        fontSize:20,
    }
});

export default styles;