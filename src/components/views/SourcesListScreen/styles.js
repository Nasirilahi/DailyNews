import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3E392E',
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    listContainer:{
        flex:9,
        flexDirection:'row',
        paddingHorizontal:15,
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