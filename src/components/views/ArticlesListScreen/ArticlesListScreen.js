import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArticlesList } from '../../../actions/articlesActions';
import LinearGradient from 'react-native-linear-gradient';
import Header from './ArticlesListComponents/Header';
import { MenuContext } from 'react-native-popup-menu';
import ArticlesListContainer from './ArticlesListComponents/ArticlesListContainer';
import Icon from 'react-native-vector-icons/Ionicons';

class ArticlesListScreen extends Component{
    static navigationOptions = ({ navigation }) => ({
         title: `Articles`,
         headerStyle:{backgroundColor:'goldenrod'},
         headerTitleStyle:{color:'white', fontSize:24,},
         gesturesEnabled:false,
         headerLeft:( <TouchableOpacity style={{marginLeft:10}} onPress={() => navigation.goBack()}>
                            <Icon name="md-arrow-back" size={30} color="#FFF" />
                    </TouchableOpacity>
        ),
    });

     constructor(props){
        super(props);
        this.state = {
            searchText:'',
            articles:[],
        }
    }
    componentWillMount(){
        const { navigation:{ state: { params: { source }}}, getArticlesList} = this.props;      
        getArticlesList(source.id);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.articles.length > 0){
            this.setState({articles:nextProps.articles});
        }
    }

    setSearchText = (searchText) => {
        this.setState({searchText});
    };

    sortingListView = (sortBy) => {
        const { navigation:{ state: { params: { source }}}, getArticlesList} = this.props;
        const { sortBysAvailable  } = source;
        const isSortAvailable = sortBysAvailable.find( sort => sort === sortBy );
        if(isSortAvailable)
         this.props.getArticlesList(source.id, isSortAvailable);
    }

    onArticleSelect = (article) =>{
        //console.log('articlearticlearticle',article);
    };

    render(){
        const { articles,searchText } = this.state;
        return(
             <MenuContext> 
                 <View style={styles.container}>
                        <Header
                            searchText={this.state.searchText}
                            setSearchText={this.setSearchText}
                            sortingListView={this.sortingListView}                            
                        /> 
                        <View style={styles.listMainContainer}>
                            {  
                                articles.length > 0 &&<ArticlesListContainer 
                                    articles={articles} 
                                    onArticleSelect={this.onArticleSelect} 
                                    searchText={searchText} 
                                />   
                             }  
                        </View>
                </View>
             </MenuContext>
        )
    }
}

const mapStateToProps = ({articlesList: { isLoading,articles }})=>({ isLoading, articles });

const mapDispatchToProps = (dispatch) => ({
    getArticlesList: bindActionCreators(getArticlesList, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps )(ArticlesListScreen);