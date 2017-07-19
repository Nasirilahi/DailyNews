import React, { Component } from 'react';
import {
    View, 
    Text,
    Animated,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSourcesList } from '../../../actions/sourceActions';
import Loader from '../common/Loader';
import CategorySelector from './SourceListComponents/CategorySelector';
import { MenuContext } from 'react-native-popup-menu';
import SourcesListContainer from './SourceListComponents/SourcesListContainer';

class SourcesListScreen extends Component{
    static navigationOptions = {
        header:null,
    };
    state = {
        isConnected: false,
        selectedCategory:{
            name:'All',
            value:'all',
        },
        categoryChanged:false,
    };

    componentWillMount = () => this.props.getSourcesList(this.state.selectedCategory);

    onOptionSelect = (selectedCategory) => {
        this.setState((prevState, props) => {
             if(selectedCategory.value !== prevState.selectedCategory.value){
                 return{ selectedCategory, categoryChanged:true };
             }
            else{
                 return{ categoryChanged:false };
            }
         }, () =>{
             if(this.state.categoryChanged){
                 this.props.getSourcesList(this.state.selectedCategory)
             }
         });
    };

    render(){
        const { isLoading, sources } = this.props;
        const { selectedCategory } = this.state;
        return(
             <MenuContext>
                  <LinearGradient colors={['#77A1D3', '#79CBCA', '#E684AE']} style={styles.outerContainer}>
                    <StatusBar 
                    translucent
                    barStyle="light-content"
                    />
                    <View style={styles.mainContainer}>
                        <View style={styles.categorySelector}>
                            <Text style={styles.categoryText}>{'News Category'}</Text>
                             <CategorySelector selectedCategory={selectedCategory} onOptionSelect={this.onOptionSelect}/>
                        </View>
                         {
                             isLoading ? <Loader /> : <SourcesListContainer sources={sources} />
                         }
                    </View>
                </LinearGradient>
            </MenuContext>
        )
    }
}

const mapStateToProps = ({sourcelist: { isLoading,sources }})=>({ isLoading, sources });

const mapDispatchToProps = (dispatch) => ({
    getSourcesList: bindActionCreators(getSourcesList, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(SourcesListScreen);