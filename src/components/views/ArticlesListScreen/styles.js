import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        marginHorizontal:10,
        borderBottomColor: 'black',
        borderBottomWidth:2,
    },
    listContainer:{
        flex:9,
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
        color:'grey',
    }
});

export default styles;