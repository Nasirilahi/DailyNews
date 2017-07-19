import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import SourcesListScreen from '../components/views/SourcesListScreen';


const AppNavigator = StackNavigator({
    SourcesList : { screen: SourcesListScreen },
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