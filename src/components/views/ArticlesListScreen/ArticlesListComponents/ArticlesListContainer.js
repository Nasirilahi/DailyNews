import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
} from 'react-native';
import styles from '../styles';
import ListRow from './ArticlesListRow';
import NotFoundView from './NotFoundView';

const inArray = (array, el) => {
  for ( var i = array.length; i--; ) {
    if ( array[i] === el ) return true;
  }
  return false;
}

const  isEqArrays = (arr1, arr2) => {
  if ( arr1.length !== arr2.length ) {
    return false;
  }
  for ( var i = arr1.length; i--; ) {
    if ( !inArray( arr2, arr1[i] ) ) {
      return false;
    }
  }
  return true;
}

class ArticlesListContainer extends Component{
     constructor() {
        super();
        this.state = {
            articles: [],
            noResult : false,
        };
    }
    componentDidMount(){
        this.setState({ articles:this.props.articles });
    }
    componentWillReceiveProps = (nextProps) => {
       if(nextProps.searchText !== ''){
           this.searchResult(nextProps.searchText);
       }
        if(!isEqArrays(nextProps.articles, this.props.articles)){
            this.setState({articles: nextProps.articles});
        }
    };

    searchResult = (value) => {
        let text = value.toLowerCase();
        let filteredData = this.props.articles.filter((row) => {
            let projectCell = row.title.toLowerCase();
            return  projectCell.search(text) !== -1;
        });
        if(filteredData.length > 0){
            this.setState({ articles: filteredData,noResult:false });   
        }
        else{
            this.setState({noResult:true});
        }
    };
    
     _keyExtractor = (item, index) => index;

    render(){
        const {articles, onArticleSelect} = this.props;
        return(
                <View style={styles.listContainer}>
                    { 
                        !this.state.noResult ? 
                           articles.length > 0 && <FlatList
                                data={this.state.articles}
                                renderItem={({item}) => <ListRow item={item} onArticleSelect={onArticleSelect} />}
                                keyExtractor={this._keyExtractor}
                            />
                        :<NotFoundView />
                    } 
                </View>
        );
    }
  
}

export default ArticlesListContainer;
