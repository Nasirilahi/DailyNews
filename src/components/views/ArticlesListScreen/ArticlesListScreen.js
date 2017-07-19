import React, { Component } from 'react';
import {
    View, 
    Text,
} from 'react-native';
import styles from './styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArticlesList } from '../../../actions/articlesActions';

class SourcesListScreen extends Component{
    static navigationOptions = {
        header:null,
    };

    componentWillMount(){
        const { navigation:{ state: { params: { source }}}, getArticlesList} = this.props;
        getArticlesList(source);
    }

    render(){
        const { isLoading, articles } = this.props;
        return(
           <View>
               <Text>{'Articles list screen'}</Text>
           </View>
        )
    }
}

const mapStateToProps = ({articlesList: { isLoading,articles }})=>({ isLoading, articles });

const mapDispatchToProps = (dispatch) => ({
    getArticlesList: bindActionCreators(getArticlesList, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps )(SourcesListScreen);