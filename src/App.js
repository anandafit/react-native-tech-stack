import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers/index';
import { Header } from './components/common';
import LibralyList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <View style = { {flex: 1} }>
        <Header headerText = "Tech Stack"/>
        <LibralyList/>
      </View>
    </Provider>
  )
};

export default App;