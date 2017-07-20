import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import SourcesListScreen from '../components/views/SourcesListScreen';
import ArticlesListScreen from '../components/views/ArticlesListScreen';

const AppNavigator = StackNavigator({
    SourcesList : { screen: SourcesListScreen },
    ArticlesList: { screen :ArticlesListScreen},
},{
    initialRouteName: 'SourcesList',
    mode: 'modal'
}
)

export default class DailyNews extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}