import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#483d8b',
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
        marginTop:20,
        borderBottomColor: 'black',
        borderBottomWidth:2,
    },
    listContainer:{
        flex:9,
        marginTop:20,
        marginHorizontal:10,
    },
    searchContainer:{
        flexDirection:'row',
        flex:1,
        marginLeft:15,
        marginRight:10,
        alignItems:'center',
    },
    textInput:{
        flex:1,
        marginLeft:10,
        color:'white',
    },
    filterSortContainer:{
        flexDirection:'row',
        marginRight:15,
    },
    menuTrigger:{
        marginLeft:10,
        width:40,
        alignItems:'center'
    },
    menuOptions:{
    },
    menuOpetionsText:{
        color:'black',
        fontSize:14,
    }
});

export default styles;