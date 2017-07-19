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

class ArticlesListScreen extends Component{
    static navigationOptions = {
        header:null,
    };

     constructor(props){
        super(props);
        this.state = {
            searchText:'',
        
        }
    }

    setSearchText = (searchText) => {
        this.setState({searchText});
    };

    sortingListView = (sortBy) => {
        //console.log('sort by ', sortBy);
    }

    componentWillMount(){
        const { navigation:{ state: { params: { source }}}, getArticlesList} = this.props;
        getArticlesList(source);
    }

    render(){
        const { isLoading, articles } = this.props;
        return(
             <MenuContext style={{ flex: 1 }}> 
                 <LinearGradient colors={['#77A1D3', '#79CBCA', '#E684AE']} style={styles.container}>
                        <Header
                            searchText={this.state.searchText}
                            setSearchText={this.setSearchText}
                            sortingListView={this.sortingListView}                            
                        />   
                        <View style={styles.listContainer} />     
                </LinearGradient>
             </MenuContext>
        )
    }
}

const mapStateToProps = ({articlesList: { isLoading,articles }})=>({ isLoading, articles });

const mapDispatchToProps = (dispatch) => ({
    getArticlesList: bindActionCreators(getArticlesList, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps )(ArticlesListScreen);