import React, { Component } from 'react';
import {
    View, 
    Text,
} from 'react-native';
import styles from './styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArticlesList } from '../../../actions/articlesActions';
import LinearGradient from 'react-native-linear-gradient';
import Header from './ArticlesListComponents/Header';
import { MenuContext } from 'react-native-popup-menu';
import ArticlesListContainer from './ArticlesListComponents/ArticlesListContainer';

class ArticlesListScreen extends Component{
    static navigationOptions = {
        header:null,
    };

     constructor(props){
        super(props);
        this.state = {
            searchText:'',
            articles:[],
        }
    }
    componentWillMount(){
        const { navigation:{ state: { params: { source }}}, getArticlesList} = this.props;
        getArticlesList(source);
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
        //console.log('sort by ', sortBy);
    }

    onArticleSelect = (article) =>{
        console.log('articlearticlearticle',article);
    };

    render(){
        const { articles } = this.state;
        return(
             <MenuContext style={{ flex: 1 }}> 
                 <View style={styles.container}>
                        <Header
                            searchText={this.state.searchText}
                            setSearchText={this.setSearchText}
                            sortingListView={this.sortingListView}                            
                        />   
                        <ArticlesListContainer articles={articles} onArticleSelect={this.onArticleSelect}  />     
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